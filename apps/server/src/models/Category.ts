import { Schema, model, Document } from "mongoose";

export interface Category extends Document {
  name: string;
  slug: string;
}

const categorySchema = new Schema<Category>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
});

categorySchema.index({ slug: 1 });

export default model<Category>("Category", categorySchema);
