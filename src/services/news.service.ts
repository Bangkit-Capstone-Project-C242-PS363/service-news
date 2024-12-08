import { Injectable } from '@nestjs/common';
import { News } from '../domain/entities/news.entity';
import { PostgresqlNewsRepository } from '../infrastructure/repositories/postgresql-news.repository';

@Injectable()
export class NewsService {
  constructor(private readonly newsRepository: PostgresqlNewsRepository) {}

  async getAllNews(): Promise<News[]> {
    return this.newsRepository.findAll();
  }

  async getNewsById(id: number): Promise<News> {
    return this.newsRepository.findById(id);
  }

  async createNews(news: News): Promise<News> {
    return this.newsRepository.create(news);
  }

  async updateNews(id: number, news: News): Promise<News> {
    return this.newsRepository.update(id, news);
  }

  async deleteNews(id: number): Promise<void> {
    return this.newsRepository.delete(id);
  }
}