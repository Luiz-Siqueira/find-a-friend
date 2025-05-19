-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN');

-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dta_nascimento" TIMESTAMP(3) NOT NULL,
    "isPossibleAdopt" BOOLEAN NOT NULL,
    "isCompanionship" BOOLEAN NOT NULL,
    "isPlayful" BOOLEAN NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orgs" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "WhatsApp" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'ADMIN',

    CONSTRAINT "orgs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "petOrg" (
    "id" TEXT NOT NULL,
    "pet_id" TEXT NOT NULL,
    "org_id" TEXT NOT NULL,

    CONSTRAINT "petOrg_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "petOrg" ADD CONSTRAINT "petOrg_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "petOrg" ADD CONSTRAINT "petOrg_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "orgs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
