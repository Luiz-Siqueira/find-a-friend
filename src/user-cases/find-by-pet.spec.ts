import { expect, test, describe, it, beforeEach } from "vitest";
import { inMemoryPetsRespository } from "@/repositories/in-memory/in-memory-pets-repositories";
import { findByPetUseCase } from "./find-by-pet";

let petsRepository: inMemoryPetsRespository;
let petFindByUserCase: findByPetUseCase;
describe("find pet by city", () => {
  beforeEach(() => {
    petsRepository = new inMemoryPetsRespository();
    petFindByUserCase = new findByPetUseCase(petsRepository);
  });

  it("should find pet by city", async () => {
    await petsRepository.create({
      name: "Jonh Doe",
      dta_nascimento: "1998-03-17T00:00:00Z",
      isPossibleAdopt: true,
      isCompanionship: true,
      isPlayful: true,
      city: "Taubaté",
      orgId: "1",
    });
    await petsRepository.create({
      name: "Jonh Doe",
      dta_nascimento: "1998-03-17T00:00:00Z",
      isPossibleAdopt: true,
      isCompanionship: true,
      isPlayful: true,
      city: "SJC",
      orgId: "1",
    });

    const { pet } = await petFindByUserCase.execute({
      city: "SJC",
    });

    expect(pet).toHaveLength(1);
    expect(pet).toEqual([expect.objectContaining({ city: "SJC" })]);
  });
  it("should find pet by city and isCompanionship", async () => {
    await petsRepository.create({
      name: "Jonh Doe",
      dta_nascimento: "1998-03-17T00:00:00Z",
      isPossibleAdopt: true,
      isCompanionship: false,
      isPlayful: false,
      city: "Taubaté",
      orgId: "1",
    });
    await petsRepository.create({
      name: "Jonh Doe",
      dta_nascimento: "1998-03-17T00:00:00Z",
      isPossibleAdopt: true,
      isCompanionship: true,
      isPlayful: false,
      city: "SJC",
      orgId: "1",
    });

    const { pet } = await petFindByUserCase.execute({
      city: "SJC",
      isCompanionship: true,
    });

    expect(pet).toHaveLength(1);
    expect(pet).toEqual([expect.objectContaining({ city: "SJC" })]);
  });
  it("should find pet by city and isCompanionship and isPlayful", async () => {
    await petsRepository.create({
      name: "Jonh Doe",
      dta_nascimento: "1998-03-17T00:00:00Z",
      isPossibleAdopt: true,
      isCompanionship: false,
      isPlayful: false,
      city: "Taubaté",
      orgId: "1",
    });
    await petsRepository.create({
      name: "Jonh Doe",
      dta_nascimento: "1998-03-17T00:00:00Z",
      isPossibleAdopt: true,
      isCompanionship: true,
      isPlayful: true,
      city: "SJC",
      orgId: "1",
    });

    const { pet } = await petFindByUserCase.execute({
      city: "SJC",
      isCompanionship: true,
    });

    expect(pet).toHaveLength(1);
    expect(pet).toEqual([
      expect.objectContaining({ city: "SJC", isCompanionship: true }),
    ]);
  });
});
