export class User {
  id: string;
  companyId: string;
  name: string;
  email: string;
  companyAddress?: string;

  constructor(id: string, companyId: string, name: string, email: string, companyAddress?: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.companyId = companyId;
    this.companyAddress = companyAddress;
  }
}