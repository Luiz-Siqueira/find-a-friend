import { PrismaOrgRepository } from "@/repositories/prisma/prisma-org-repository";
import { findOrgByPetUseCase } from "../find-org-by-pet";

export function makeFindOrgByPetUserCase() {
  const repository = new PrismaOrgRepository();
  const useCase = new findOrgByPetUseCase(repository);

  return useCase;
}
