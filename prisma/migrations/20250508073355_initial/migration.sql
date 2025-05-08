-- CreateTable
CREATE TABLE "key_values" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "key_values_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "openai_batch_tasks" (
    "batch_id" TEXT NOT NULL,
    "custom_id" TEXT NOT NULL,
    "json_data" JSONB NOT NULL,
    "openai_file_id" TEXT,
    "file_uploaded" BOOLEAN NOT NULL DEFAULT false,
    "openai_batch_id" TEXT,
    "status" TEXT NOT NULL,
    "result" TEXT,
    "time_last_updated" BIGINT NOT NULL,
    "time_created" BIGINT NOT NULL,
    "output_file_id" TEXT,

    CONSTRAINT "openai_batch_tasks_pkey" PRIMARY KEY ("batch_id")
);

-- CreateIndex
CREATE INDEX "openai_batch_tasks_custom_id_idx" ON "openai_batch_tasks"("custom_id");

-- CreateIndex
CREATE INDEX "openai_batch_tasks_status_result_idx" ON "openai_batch_tasks"("status", "result");

-- CreateIndex
CREATE INDEX "openai_batch_tasks_openai_file_id_idx" ON "openai_batch_tasks"("openai_file_id");

-- CreateIndex
CREATE INDEX "openai_batch_tasks_openai_batch_id_idx" ON "openai_batch_tasks"("openai_batch_id");

-- CreateIndex
CREATE INDEX "openai_batch_tasks_status_openai_file_id_file_uploaded_open_idx" ON "openai_batch_tasks"("status", "openai_file_id", "file_uploaded", "openai_batch_id");
