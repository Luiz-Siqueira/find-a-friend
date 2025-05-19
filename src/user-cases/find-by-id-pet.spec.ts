import { expect, test, describe, it, beforeEach } from "vitest";
import { inMemoryPetsRespository } from "@/repositories/in-memory/in-memory-pets-repositories";
import { findByIdUseCase } from "./find-by-id-pet";

let petsRepository: inMemoryPetsRespository;
let petFindByIdUserCase: findByIdUseCase;
describe("find pet by city", () => {
  beforeEach(() => {
    petsRepository = new inMemoryPetsRespository();
    petFindByIdUserCase = new findByIdUseCase(petsRepository);
  });

  it("should find pet by id", async () => {
    const pet1 = await petsRepository.create({
      name: "Cachorro 1",
      dta_nascimento: "1998-03-17T00:00:00Z",
      isPossibleAdopt: true,
      isCompanionship: true,
      isPlayful: true,
      city: "Taubaté",
    });

    const { pet } = await petFindByIdUserCase.execute({
      petId: pet1.id,
    });

    expect(pet.name).toEqual("Cachorro 1");
  });
});
