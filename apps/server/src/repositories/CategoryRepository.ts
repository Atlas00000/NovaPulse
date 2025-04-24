import CategoryModel, { Category } from "../models/Category";

export class CategoryRepository {
  static create(data: Partial<Category>) {
    return CategoryModel.create(data);
  }
  static findBySlug(slug: string) {
    return CategoryModel.findOne({ slug });
  }
  static findAll() {
    return CategoryModel.find();
  }
}
