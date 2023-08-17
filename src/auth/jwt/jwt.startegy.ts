import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Payload } from '../dto/dto.payload';
import { UsersService } from 'src/users/users.service';
import { UnauthorizedException } from '@nestjs/common';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private usersService: UsersService
    ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
      ignoreExpiration: false,
    });
  }

  async validate(payload: Payload): Promise<any> {
    console.log("jwtStrategy!!!");
		const id = payload.s_id;
    console.log("s_id: ", id);
		// const user = await this.usersService.findOne(id);
		// if (!user)
		// 	throw new UnauthorizedException();
	  return id;
	}
}
