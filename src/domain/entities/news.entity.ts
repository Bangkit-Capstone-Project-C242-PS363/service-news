import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column('text', { nullable: true })
  image: string;
}