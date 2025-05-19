import { Org, Pet, Prisma } from "@prisma/client";

export interface OrgRepository {
  create(data: Prisma.OrgCreateInput): Promise<Org>;
  findOrgByDog(petId: string): Promise<Org>;
  findByEmail(email: string): Promise<Org | null>;
}
