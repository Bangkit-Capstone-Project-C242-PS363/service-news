// src/infrastructure/repositories/postgresql-news.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from '../../domain/entities/news.entity';

@Injectable()
export class PostgresqlNewsRepository {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>
  ) {}

  async findAll(): Promise<News[]> {
    return this.newsRepository.find();
  }

  async findById(id: number): Promise<News> {
    return this.newsRepository.findOne({ where: { id } });
  }

  async create(news: News): Promise<News> {
    return this.newsRepository.save(news);
  }

  async update(id: number, news: News): Promise<News> {
    await this.newsRepository.update(id, news);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.newsRepository.delete(id);
  }
}