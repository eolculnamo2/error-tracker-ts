import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import USER_ROLE from 'src/enums/user-roles';

@Schema()
export class User extends Document {
  @Prop({ required: true})
  email: string;

  @Prop({ required: true})
  password: string;

  @Prop({ required: true})
  firstName: string;

  @Prop({ required: true})
  lastName: string;

  @Prop({ required: true})
  role: USER_ROLE;
}

export const UserSchema = SchemaFactory.createForClass(User);