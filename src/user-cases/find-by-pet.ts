import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import { PetRepository, pets } from "../repositories/petRepository";

interface findByPetUseCaseRequest {
  city: string;
  isCompanionship?: boolean;
  isPlayful?: boolean;
}

export class findByPetUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute({ city, isCompanionship, isPlayful }: findByPetUseCaseRequest) {
    const pet = await this.petRepository.findBy(
      city,
      isCompanionship,
      isPlayful
    );

    return { pet };
  }
}
