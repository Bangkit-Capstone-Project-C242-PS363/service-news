import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsController } from './controllers/news.controller';
import { NewsService } from './services/news.service';
import { News } from './domain/entities/news.entity';
import { PostgresqlNewsRepository } from './infrastructure/repositories/postgresql-news.repository';

@Module({
  imports: [TypeOrmModule.forFeature([News])],
  controllers: [NewsController],
  providers: [NewsService, PostgresqlNewsRepository]
})
export class NewsModule {}