/*
  Warnings:

  - You are about to alter the column `descricao` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(500)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `descricao` VARCHAR(191) NOT NULL;
