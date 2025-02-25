
import { fetchUserData } from './promises';
import { transformUser } from './transformation';
import { User } from './types';
import { ExtendedUser } from './abstraction';

async function main() {
  const users: User[] = await fetchUserData();
  
 
  const shortUserInfos = users.map(user => transformUser(user));

  console.log(shortUserInfos);

 
  const extendedUser = new ExtendedUser(1, 'John Doe', 'johndoe@example.com');
  console.log(extendedUser.getName());
  console.log(extendedUser.getEmail());
}

main();
