import { CompanyRepository } from '../domain/company.repository';
import { Company } from '../domain/company.entity';

export class InMemoryCompanyRepository implements CompanyRepository {
  private companies: Company[] = [
    { id: '1', name: 'Company A', address: '123 Main Street' },
    { id: '2', name: 'Company B', address: '456 Oak Avenue' },
  ];
  async getCompanyById(companyId: string): Promise<Company | null> {
    const company = this.companies.find((company) => company.id === companyId);
    return company || null;
  }
}
