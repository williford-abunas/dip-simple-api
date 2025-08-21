import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Attempt to Deploy 3 - Test CICD with GH Actions';
  }
}
