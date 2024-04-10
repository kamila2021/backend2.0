import { Controller, Get } from '@nestjs/common';

@Controller('api/v1')
export class ApiController {
  @Get()
  findAll(): string {
    return 'This is the API endpoint';
  }
}
