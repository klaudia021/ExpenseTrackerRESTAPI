import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(
  ) {}

  @Get()
  async signIn(@Body() body: any) {

  }

}
