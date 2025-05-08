/*
  Warnings:

  - Added the required column `original_base_url` to the `openai_batch_tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "openai_batch_tasks" ADD COLUMN     "original_base_url" TEXT NOT NULL;
