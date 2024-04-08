/*
  Warnings:

  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Message";

-- CreateTable
CREATE TABLE "message" (
    "id" TEXT NOT NULL,
    "type" VARCHAR(100) NOT NULL,
    "status" VARCHAR(100),
    "time" VARCHAR(100),
    "message_id" VARCHAR(100),
    "conversation_id" VARCHAR(100),
    "url" VARCHAR(50),
    "geo" JSONB,
    "message" VARCHAR(50),
    "variables" VARCHAR(500),
    "send" BOOLEAN NOT NULL DEFAULT true,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "message_id_key" ON "message"("id");
