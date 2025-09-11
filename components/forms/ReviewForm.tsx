"use client";

import Form from "next/form";
import StarRating from "../ui/StarRating";
import { createReview } from "@/app/actions/action.reviews";
import MagicButton from "../ui/MagicButton";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";

const ReviewForm = () => {
  const handleSubmit = async (formdata: FormData) => {
    const result = await createReview(formdata);
    if (result?.success) {
      toast("Thank You for you contribution. Review Submitted for Approval :)");
    } else {
      toast(result?.error);
    }
  };

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <MagicButton
            title="Rate My Work"
            position="right"
            icon={<FaArrowUp />}
          />
        </PopoverTrigger>
        <PopoverContent className="w-full bg-[#0a0a0a] text-white">
          <div className="flex  items-center justify-center font-sans ">
            <Form action={handleSubmit}>
              <div className="flex flex-col gap-3 ">
                <h1 className="text-3xl font-semibold">
                  We’d Love Your Feedback
                </h1>

                <div className="flex gap-3 items-start justify-start">
                  <label>Author Name:</label>
                  <input
                    type="text"
                    name="user"
                    id="user"
                    className="border border-white placeholder:text-white"
                  />
                  <label>Choose Avatar:</label>

                  <input type="file" name="avatar" />
                </div>

                <StarRating />
                <textarea
                  id="comment"
                  name="comment"
                  placeholder="Tell us more"
                  rows={4}
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <MagicButton
                  position="right"
                  title="Post My Review"
                  icon={<FaArrowDown />}
                  type="submit"
                />
              </div>
            </Form>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ReviewForm;
