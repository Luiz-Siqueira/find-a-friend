import { PrismaPetRepository } from "../../repositories/prisma/prisma-pet-repository";
import { CreatePetUseCase } from "../create-pet";

export function makeCreatePetUserCase() {
  const repository = new PrismaPetRepository();
  const useCase = new CreatePetUseCase(repository);

  return useCase;
}
