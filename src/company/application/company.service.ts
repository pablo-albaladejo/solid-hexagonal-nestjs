import { Company } from '../domain/company.entity';
import { CompanyRepository } from '../domain/company.repository';

export class CompanyService {
  constructor(private companyRepository: CompanyRepository) {}

  async getCompayByUserId(userId: string): Promise<Company> {
    const company = await this.companyRepository.getCompanyByUserId(userId);

    if (!company) {
      throw new Error(`Company with userId ${userId} not found`);
    }

    return company;
  }
}
