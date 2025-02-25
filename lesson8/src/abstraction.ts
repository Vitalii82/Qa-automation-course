// abstraction.ts
export class BaseUser {
    id: number;
    name: string;
    
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  
    getName(): string {
      return this.name;
    }
  }
  

export class ExtendedUser extends BaseUser {
    email: string;
    
    constructor(id: number, name: string, email: string) {
      super(id, name); 
      this.email = email;
    }
  
    getEmail(): string {
      return this.email;
    }
}
  