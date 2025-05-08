/*
  Warnings:

  - The `result` column on the `openai_batch_tasks` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "openai_batch_tasks" DROP COLUMN "result",
ADD COLUMN     "result" JSONB;

-- CreateIndex
CREATE INDEX "openai_batch_tasks_status_result_idx" ON "openai_batch_tasks"("status", "result");
