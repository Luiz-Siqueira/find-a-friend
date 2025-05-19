/*
  Warnings:

  - You are about to drop the `petOrg` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "petOrg" DROP CONSTRAINT "petOrg_org_id_fkey";

-- DropForeignKey
ALTER TABLE "petOrg" DROP CONSTRAINT "petOrg_pet_id_fkey";

-- DropTable
DROP TABLE "petOrg";
