import { PrismaPetRepository } from "../../repositories/prisma/prisma-pet-repository";
import { findByPetUseCase } from "../find-by-pet";

export function makeFindByPetUserCase() {
  const repository = new PrismaPetRepository();
  const useCase = new findByPetUseCase(repository);

  return useCase;
}
