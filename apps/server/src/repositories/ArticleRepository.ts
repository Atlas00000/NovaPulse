import ArticleModel, { Article } from "../models/Article";
import { CategoryRepository } from "./CategoryRepository";

export class ArticleRepository {
  static create(data: Partial<Article>) {
    return ArticleModel.create(data);
  }
  static findAll() {
    return ArticleModel.find().sort({ publishedAt: -1 });
  }
  static async findByCategorySlug(slug: string) {
    const category = await CategoryRepository.findBySlug(slug);
    if (!category) return [];
    return ArticleModel.find({ category: category._id }).sort({ publishedAt: -1 });
  }
  static findBySlug(slug: string) {
    return ArticleModel.findOne({ slug });
  }
}
