import { PrismaPetRepository } from "../../repositories/prisma/prisma-pet-repository";
import { findByIdUseCase } from "../find-by-id-pet";

export function makeFindByIdPetUserCase() {
  const repository = new PrismaPetRepository();
  const useCase = new findByIdUseCase(repository);

  return useCase;
}
