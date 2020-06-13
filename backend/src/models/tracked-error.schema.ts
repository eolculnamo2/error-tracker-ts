import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TrackedError extends Document {
  @Prop()
  message: string;

  @Prop()
  filePath: string;

  @Prop()
  lineNumber: number;

  @Prop()
  columnNumber: number;

  @Prop()
  error: string;
}

export const TrackedErrorSchema = SchemaFactory.createForClass(TrackedError);