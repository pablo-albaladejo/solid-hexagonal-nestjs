import { Company } from '../../domain/entities/company.entity';
import { CompanyRepository } from '../ports/company.repository';

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
