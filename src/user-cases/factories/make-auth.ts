import { PrismaOrgRepository } from "@/repositories/prisma/prisma-org-repository";
import { CreateOrgUseCase } from "../create-org";
import { AuthenticateUserCase } from "../auth";

export function makeCreateAuthUserCase() {
  const repository = new PrismaOrgRepository();
  const useCase = new AuthenticateUserCase(repository);

  return useCase;
}
