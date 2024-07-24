/* eslint-disable prettier/prettier */
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    console.log({ metadata });
    if (!isValidObjectId(value)) {
      throw new Error('Invalid MongoDB ObjectId');
    }
    return value;
  }
}
