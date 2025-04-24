import { Schema, model, Document, Types } from "mongoose";

export interface Article extends Document {
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: Types.ObjectId;
  author: Types.ObjectId;
  publishedAt: Date;
}

const articleSchema = new Schema<Article>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  summary: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  publishedAt: { type: Date, default: Date.now },
});

articleSchema.index({ category: 1, publishedAt: -1 });

export default model<Article>("Article", articleSchema);
