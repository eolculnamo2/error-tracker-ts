import { User } from "src/models/user.schema";
import { TrackedError } from "src/models/tracked-error.schema";

export default class OrganizationObject {
  id?: number;
  name: string;
  users: Array<User>;
  website: string;
  errorList: Array<TrackedError>;
}
