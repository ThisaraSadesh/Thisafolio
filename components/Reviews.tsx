export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";


import React from "react";
import { FetchReviews } from "@/app/actions/action.reviews";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const Reviews = async () => {
  const allReviews = await FetchReviews("user");
  const reviews = allReviews.reviews;

  const formattedReviews = reviews?.map((rev) => {
    let base64Image = null;
    if (rev.avatar?.data && rev.avatar?.contentType) {
      const bufferData = Buffer.from(rev.avatar.data, "base64"); // Convert binary to buffer
      base64Image = `data:${
        rev.avatar.contentType
      };base64,${bufferData.toString("base64")}`;
    }

    return {
      quote: rev.comment,
      name: rev.user,
      designation: "Manager",
      src: base64Image?base64Image : 'https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg', // Pass base64 string to image src
      rating:rev.rating
    };
  });
  return (
    <>
      <div
        className="flex flex-col gap-4 items-center justify-center p-3 min-h-screen"
        id="testimonials"
      >
        <h1 className="heading">
          Recent<span className="text-purple"> Reviews</span>{" "}
        </h1>
        {formattedReviews && (
          <AnimatedTestimonials
            testimonials={formattedReviews}
            autoplay={true}
          />
        )}
      </div>
    </>
  );
};

export default Reviews;
