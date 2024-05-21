/*
  Warnings:

  - Added the required column `remark` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `person` MODIFY `gender` ENUM('MALE', 'FEMALE') NULL;

-- AlterTable
ALTER TABLE `todo` ADD COLUMN `remark` TEXT NOT NULL;
