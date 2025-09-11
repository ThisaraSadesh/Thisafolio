"use client";

import { ObjectId } from "mongoose";
import { UpdateReviews } from "@/app/actions/action.reviews";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

interface RejectButtonProps {
  revId: ObjectId;
}

export default function RejectButton({ revId }: RejectButtonProps) {
      const path = usePathname();

  const handleRejecteReview = async () => {
    const result = await UpdateReviews({revId:revId, action:"reject", path:path});
    if (result?.success) {
      toast("Review Rejected Successfully");
    } else {
      toast("Review Rejection Failed");
    }
  };

  return (
    <button
      onClick={handleRejecteReview}
      className="bg-red-500 p-3 rounded-full cursor-pointer hover:bg-red-900"
    >
      Reject
    </button>
  );
}
