import { expect, test, describe, it, beforeEach } from "vitest";
import { inMemoryPetsRespository } from "@/repositories/in-memory/in-memory-pets-repositories";
import { CreatePetUseCase } from "./create-pet";

let petsRepository: inMemoryPetsRespository;
let petCreateUserCase: CreatePetUseCase;
describe("Register use case", () => {
  beforeEach(() => {
    petsRepository = new inMemoryPetsRespository();
    petCreateUserCase = new CreatePetUseCase(petsRepository);
  });

  it("should hash pet create", async () => {
    const { pet } = await petCreateUserCase.execute({
      name: "teste",
      isPlayful: true,
      isPossibleAdopt: true,
      isCompanionship: true,
      dta_nascimento: String(new Date()),
      city: "SJC",
      orgId: "1",
    });

    expect(pet.id).toEqual(expect.any(String));
  });
});
