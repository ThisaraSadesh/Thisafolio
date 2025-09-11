import React from "react";
import { FetchReviews } from "../actions/action.reviews";
import { redirect } from "next/navigation";
import { UpdateReviews } from "../actions/action.reviews";
import { ObjectId } from "mongoose";
import { toast } from "sonner";
import ApproveButton from "@/components/ui/ApproveButton";
import RejectButton from "@/components/ui/RejectButton";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const search = await searchParams;
  const key = search.key;

  if (key !== process.env.ADMIN_KEY) {
    redirect("/");
  }

  const fetchedReviews = await FetchReviews("admin");
  const allReviews = fetchedReviews.reviews;
  console.log('All reviews got',allReviews);

  return (
    <div>
      <h1 className="text-center text-4xl">All Reviews for admin</h1>

      {allReviews && allReviews.length > 0 ? (
        allReviews.map((review) => (
          <div
            key={review._id}
            className="flex flex-col gap-3 items-center justify-center p-2 m-10"
          >
            <h1>Review Author : {review.user}</h1>
            <h1>Review Comment : {review.comment}</h1>
            <h1>Review Rating : 5/{review.rating}</h1>
            {review.approved && <h1>Review Status : Approved</h1>}

                        
            {review.approved && <RejectButton revId={review._id} />}
            {!review.approved && <ApproveButton revId={review._id} />}
          </div>
        ))
      ) : (
        <h1>No reviews Found</h1>
      )}
    </div>
  );
};

export default Page;
