/*
  Warnings:

  - You are about to drop the column `sex` on the `person` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `person` DROP COLUMN `sex`,
    ADD COLUMN `gender` ENUM('MALE', 'FEMALE') NULL;
