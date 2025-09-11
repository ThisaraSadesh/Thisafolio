import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: { type: "string", required: true },
 avatar: {
    data: Buffer,         
    contentType: String, 
  },
  comment: { type: "string" },
  rating: { type: "number", required: true },
  approved: { type: "boolean", required: true, default: false },
});

const reviewModel =
  mongoose.models.reviews || mongoose.model("reviews", reviewSchema);
export default reviewModel;
