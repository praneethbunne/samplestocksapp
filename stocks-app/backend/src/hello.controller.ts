import { Controller, Get } from '@nestjs/common';

@Controller()
export class HelloController {
  @Get('ping')
  getHello() {
    return { message: 'pong' };
  }
}
