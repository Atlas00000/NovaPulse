import { Schema, model, Document, Types } from "mongoose";

export interface UserPrefs extends Document {
  user: Types.ObjectId;
  categories: Types.ObjectId[];
}

const userPrefsSchema = new Schema<UserPrefs>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

export default model<UserPrefs>("UserPrefs", userPrefsSchema);
