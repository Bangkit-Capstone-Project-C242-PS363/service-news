import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsModule } from './news.module';
import { config } from './config/config';
import { News } from './domain/entities/news.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.DB_HOST,
      port: config.DB_PORT,
      username: config.DB_USER,
      password: config.DB_PASSWORD,
      database: config.DB_NAME,
      entities: [News],
      synchronize: false
    }),
    NewsModule
  ],
})
export class AppModule {}