import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { NewsService } from '../services/news.service';
import { News } from '../domain/entities/news.entity';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async getAllNews(): Promise<News[]> {
    return this.newsService.getAllNews();
  }

  @Get(':id')
  async getNewsById(@Param('id') id: number): Promise<News> {
    const news = await this.newsService.getNewsById(id);
    if (!news) {
      throw new NotFoundException('News not found');
    }
    return news;
  }

  @Post()
  async createNews(@Body() news: News): Promise<News> {
    return this.newsService.createNews(news);
  }

  @Put(':id')
  async updateNews(@Param('id') id: number, @Body() news: News): Promise<News> {
    return this.newsService.updateNews(id, news);
  }

  @Delete(':id')
  async deleteNews(@Param('id') id: number): Promise<void> {
    return this.newsService.deleteNews(id);
  }
}