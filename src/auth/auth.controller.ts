import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('naver')
  @UseGuards(AuthGuard('naver'))
  naverLogin() {
    // Naver 로그인 시작
  }

  @Get('naver/callback')
  @UseGuards(AuthGuard('naver'))
  naverCallback(@Req() req) {
    // Naver 로그인 콜백
    return req.user;
  }
}
