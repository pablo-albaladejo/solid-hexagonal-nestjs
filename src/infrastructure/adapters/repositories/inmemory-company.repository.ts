import { CompanyRepository } from '../../../domain/ports/company.repository';
import { Company } from '../../../domain/entities/company.entity';

export class InMemoryCompanyRepository implements CompanyRepository {
  private companies: Company[] = [
    { id: '1', users: ['1'], name: 'Company A', address: '123 Main Street' },
    { id: '2', users: ['2'], name: 'Company B', address: '456 Oak Avenue' },
  ];
  async getCompanyByUserId(userId: string): Promise<Company | null> {
    const company = this.companies.find((company) => company.users.includes(userId));
    return company || null;
  }
}
