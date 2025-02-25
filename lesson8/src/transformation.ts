
import { User } from './types';

class ShortUserInfo {
  name: string;
  email: string;
  city: string;
  company: string;

  constructor(user: User) {
    this.name = user.name;
    this.email = user.email;
    this.city = user.address.city;
    this.company = user.company.name;
  }
}

export function transformUser(user: User): ShortUserInfo {
  return new ShortUserInfo(user);
}
