import { Controller, Get, Redirect, Res } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('/docs', 302)
  redirectToDocs() {
    return;
  }
}
