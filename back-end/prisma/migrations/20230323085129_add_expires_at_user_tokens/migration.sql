/*
  Warnings:

  - Added the required column `expires_date` to the `users_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users_tokens" ADD COLUMN     "expires_date" TIMESTAMP(3) NOT NULL;
