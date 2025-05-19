import { Org, Pet, Prisma } from "@prisma/client";

export interface pets {
  name: String;
  dta_nascimento: String;
  isPossibleAdopt: Boolean;
  isCompanionship: Boolean;
  isPlayful: Boolean;
  city: String;
}
export interface petsResponse {
  id?: String;
  name: String;
  dta_nascimento: String;
  isPossibleAdopt: Boolean;
  isCompanionship: Boolean;
  isPlayful: Boolean;
  city: String;
}

export interface PetRepository {
  create(data: Prisma.PetCreateInput): Promise<Pet>;
  findBy(
    city: string,
    isCompanionship?: boolean,
    isPlayful?: boolean
  ): Promise<Pet[]>;
  // findBy(isCompanionship: boolean, isPlayful: boolean): Promise<Pet[]>;
  findById(petId: string): Promise<Pet>;
}
