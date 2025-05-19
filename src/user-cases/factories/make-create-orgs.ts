import { PrismaOrgRepository } from "@/repositories/prisma/prisma-org-repository";
import { CreateOrgUseCase } from "../create-org";

export function makeCreateOrgUserCase() {
  const repository = new PrismaOrgRepository();
  const useCase = new CreateOrgUseCase(repository);

  return useCase;
}
