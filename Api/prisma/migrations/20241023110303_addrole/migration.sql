-- DropIndex
DROP INDEX `Post_authorId_fkey` ON `post`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('SUPERADMIN', 'ADMIN', 'MEMBER') NOT NULL DEFAULT 'MEMBER';

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
