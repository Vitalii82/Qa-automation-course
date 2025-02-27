
import { User } from './types';

export function fetchUserData(): Promise<User[]> {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data: User[]) => {
      return data;  
    });
}
