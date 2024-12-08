import { News } from '../entities/news.entity';

export interface NewsRepository {
  findAll(): Promise<News[]>;
  findById(id: number): Promise<News>;
  create(news: News): Promise<News>;
  update(id: number, news: News): Promise<News>;
  delete(id: number): Promise<void>;
}