
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from './user.schema';
import { TrackedError } from './tracked-error.schema';

@Schema()
export class Organization extends Document {
  @Prop()
  name: string;

  @Prop()
  users: Array<User>;

  @Prop()
  website: string;

  @Prop()
  errorList: Array<TrackedError>;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);