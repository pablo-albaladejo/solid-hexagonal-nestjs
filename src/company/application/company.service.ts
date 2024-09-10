import { Company } from '../domain/company.entity';
import { CompanyRepository } from '../domain/company.repository';

export class CompanyService {
  constructor(private companyRepository: CompanyRepository) {}

  async getCompayById(companyId: string): Promise<Company> {
    const company = await this.companyRepository.getCompanyById(companyId);

    if (!company) {
      throw new Error(`Company with id ${companyId} not found`);
    }

    return company;
  }
}
