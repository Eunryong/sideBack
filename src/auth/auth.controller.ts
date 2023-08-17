import { Controller, Get, Req, Res, UseGuards, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ){}
  
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
  

  // donghakl test
  @Post('/signin')
	signIn(@Body() id:string): Promise<{ accessToken: string}> {
		return this.authService.signIn(id);
	}

  @Post('/test')
	@UseGuards(AuthGuard('jwt'))
	isAuthenticated(@Req() req){
    console.log("success test ", req);
	}
}
