import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		private jwtService: JwtService
	){}

	async signIn(id: string): Promise<{ accessToken: string }> {
		const s_id  = id;
			const payload = { s_id };
			const accessToken = await this.jwtService.sign(payload);
			return { accessToken };
	}
}
