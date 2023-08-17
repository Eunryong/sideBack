import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  @Get('naver')
  @UseGuards(AuthGuard('naver'))
  naverLogin() {
    console.log('hi');
    // Naver 로그인 시작
  }

  @Get('naver/callback')
  @UseGuards(AuthGuard('naver'))
  naverCallback(@Res() res): void {
    console.log(res);
    res.redirect('http://localhost:3001/auth');
  }
}
