import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AccessTokenAuthGuard extends AuthGuard('access-token') {}

@Injectable()
export class RefreshTokenAuthGuard extends AuthGuard('refresh-token') {}

@Injectable()
export class ConfirmAccountTokenAuthGuard extends AuthGuard('confirm-token') {}