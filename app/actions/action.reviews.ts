"use server";
import reviewModel from "@/lib/models/reviews.model";
import ReviewsModel from "@/lib/models/reviews.model";
import { connectDB } from "@/lib/mongodb";
import { ObjectId } from "mongoose";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";

export const createReview = async (formData: FormData) => {
  try {
    connectDB();
    console.log("formData recieved", formData);
    const user = formData.get("user");
    const comment = formData.get("comment");
    const rating = Number(formData.get("rating"));
    const avatar = formData.get("avatar");

    let avatarBuffer: Buffer | null = null;
    let avatarType: string | null = null;
    let errMsg;
    if (avatar instanceof File) {
      const allowedTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/gif",
      ];
      if (!allowedTypes.includes(avatar.type)) {
        errMsg = "Please upload only image-type file.";

        return { success: false, error: errMsg };
      }

      const arrayBuffer = await avatar.arrayBuffer();
      avatarBuffer = Buffer.from(arrayBuffer);
      avatarType = avatar.type;
    }

    const result = await ReviewsModel.create({
      user: user,
      comment: comment,
      rating: rating,
      avatar: avatarBuffer
        ? { data: avatarBuffer, contentType: avatarType }
        : null,
    });

    if (!result) {
      console.log("Review adding failed");
      errMsg = "Review adding failed";
      return { success: false, error: errMsg };
    }

    console.log("Review added successfully");
    return { success: true };
  } catch (error) {
    console.error(error);
  }
};

export const FetchReviews = async (role: string) => {
  try {
    connectDB();
    let reviews;
    if (role === "admin") {
      reviews = await ReviewsModel.find({});
      console.log("Reviews for admin", reviews);
    } else {
      reviews = await ReviewsModel.find({ approved: true });
      console.log("Reviews for user", reviews);
    }

    return { reviews: reviews, success: true };
  } catch (error) {
    console.error(error);

    return { success: false };
  }
};

interface UpdateReviewsProps {
  revId: ObjectId;
  action: string;
  path: string;
}

export const UpdateReviews = async ({
  revId,
  action,
  path,
}: UpdateReviewsProps) => {
  try {
    connectDB();
    let review;

    review = await reviewModel.findOneAndUpdate(
      { _id: revId },
      {
        approved: action === "approve" ? true : false,
      }
    );

    if (!review) {
      console.log("Updation Failed");
      return { success: false };
    } else {
      console.log("Updation Successful");
      revalidatePath(path);
      return { success: true };
    }
  } catch (error) {
    console.error(error);
  }
};
