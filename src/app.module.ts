import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'expenseTracker',
      entities: [User],
      synchronize: true //Setting synchronize: true shouldn't be used in production
    }),
  UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
