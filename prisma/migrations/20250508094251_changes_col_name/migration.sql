/*
  Warnings:

  - The primary key for the `openai_batch_tasks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `batch_id` on the `openai_batch_tasks` table. All the data in the column will be lost.
  - Added the required column `id` to the `openai_batch_tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "openai_batch_tasks" DROP CONSTRAINT "openai_batch_tasks_pkey",
DROP COLUMN "batch_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "openai_batch_tasks_pkey" PRIMARY KEY ("id");
