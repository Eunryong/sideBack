// naver.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-oauth2';

@Injectable()
export class NaverStrategy extends PassportStrategy(Strategy, 'naver') {
  constructor() {
    super({
      authorizationURL: 'https://nid.naver.com/oauth2.0/authorize',
      tokenURL: 'https://nid.naver.com/oauth2.0/token',
      clientID: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
      callbackURL: process.env.NAVER_CALLBACK_URL, // 콜백 URL 수정
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    // 여기에서 사용자 프로필을 저장하거나 확인하는 로직을 작성합니다.
    // profile 객체에 Naver에서 받아온 사용자 정보가 들어 있습니다.
    const user = {
      id: profile.id,
      username: profile.displayName,
      email: profile.emails[0].value,
      // ... 필요한 다른 사용자 정보 추가
    };

    done(null, user);
  }
}
