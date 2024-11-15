/*
  Warnings:

  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Post_authorId_fkey` ON `post`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `password` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `name` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
