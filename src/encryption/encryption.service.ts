import { Injectable } from "@nestjs/common";
import * as crypto from 'crypto';

interface IEncryptionService {
  encrypt: (plainText: string, masterkey: string) => string;
  decrypt: (encdata: string, masterkey: string) => string;
}

@Injectable()
export default class EncryptionService implements IEncryptionService {
  // todo move key to env variable
  cipher;
  decipher;
  constructor() {
    const key = 'kdmMvjdnBfhejfidkemfjdkdmdqnwf13';
    const iv = new Buffer(crypto.randomBytes(16))
    const ivstring = iv.toString('hex').slice(0, 16);
    this.cipher = crypto.createCipheriv('aes-256-cbc', key, ivstring)
    this.decipher = crypto.createDecipheriv('aes-256-cbc', key,ivstring);
  }

  encrypt (plainText: string): string {
    this.cipher.update(plainText, 'utf8', 'base64');
    return this.decrypt(this.cipher.final('base64'));
  }

  decrypt (encrypedText: string): string {
   this.decipher.update(encrypedText, 'base64', 'utf8')
  return this.decipher.final('utf8');
  }
}