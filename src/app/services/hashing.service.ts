import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5.js';

@Injectable()
export class HashingService {
  generateHash(value: string): string {
    return Md5.hashAsciiStr(value).toString();
  }
  generateDoubleHash(value: string): string {
    const initialHash = Md5.hashAsciiStr(value).toString();
    return Md5.hashAsciiStr(initialHash).toString();
  }
  generateTripleHash(value: string): string {
    const initialHash = Md5.hashAsciiStr(value).toString();
    const secondaryHash = Md5.hashAsciiStr(initialHash).toString();
    return Md5.hashAsciiStr(secondaryHash).toString();
  }
}
