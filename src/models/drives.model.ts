import { Entity } from 'typeorm';
import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  funcionario: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
