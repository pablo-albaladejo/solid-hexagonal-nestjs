import { Company } from './company.entity';

export interface CompanyRepository {
  getCompanyById(companyId: string): Promise<Company | null>;
}
