import { Company } from './company.entity';

export interface CompanyRepository {
  getCompanyByUserId(userId: string): Promise<Company | null>;
}
