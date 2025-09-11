"use client";

import { ObjectId } from "mongoose";
import { UpdateReviews } from "@/app/actions/action.reviews";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

interface ApproveButtonProps {
  revId: ObjectId;
}

export default function ApproveButton({ revId }: ApproveButtonProps) {
  const path = usePathname();

  const handleApproveReview = async () => {
    const result = await UpdateReviews({revId:revId, action:"approve", path:path});
    if (result?.success) {
      toast("Review Approved Successfully");
    } else {
      toast("Review Approval Failed");
    }
  };

  return (
    <button
      onClick={handleApproveReview}
      className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-900"
    >
      Approve
    </button>
  );
}
