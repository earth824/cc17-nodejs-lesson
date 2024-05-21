/*
  Warnings:

  - You are about to drop the column `gender` on the `person` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `person` DROP COLUMN `gender`,
    ADD COLUMN `sex` ENUM('MALE', 'FEMALE') NULL;
