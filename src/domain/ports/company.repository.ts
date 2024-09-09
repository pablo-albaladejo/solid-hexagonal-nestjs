import { Company } from '../../domain/entities/company.entity';

export interface CompanyRepository {
  getCompanyByUserId(userId: string): Promise<Company | null>;
}
