import { randomUUID } from "node:crypto";
import { PetRepository, pets, petsResponse } from "../petRepository";
import { Pet, Prisma } from "@prisma/client";

export class inMemoryPetsRespository implements PetRepository {
  public items: Pet[] = [];
  async findById(petId: string): Promise<Pet> {
    const pet = this.items.find((item) => item.id === petId);

    if (!pet) {
      throw new Error("Pet not found");
    }

    return pet;
  }
  async findBy(
    city: string,
    isCompanionship: boolean,
    isPlayful: boolean
  ): Promise<Pet[]> {
    let pets;
    const filterCity = this.items.filter((item) => item.city === city);
    if (isCompanionship || isPlayful) {
      pets = filterCity.filter(
        (item) =>
          item.isCompanionship === isCompanionship ||
          item.isPlayful === isPlayful
      );
    } else {
      pets = filterCity;
    }

    return pets;
  }

  async create(data: Prisma.PetCreateInput): Promise<Pet> {
    const pet: Pet = {
      id: randomUUID(),
      name: data.name,
      dta_nascimento: new Date(),
      isPossibleAdopt: data.isPossibleAdopt,
      isCompanionship: data.isCompanionship,
      isPlayful: data.isPlayful,
      city: data.city,
      orgId: data.orgId,
    };

    this.items.push(pet);

    return pet;
  }
}
