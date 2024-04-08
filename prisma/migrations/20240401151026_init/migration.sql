-- CreateTable
CREATE TABLE "Message" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" VARCHAR(100) NOT NULL,
    "status" VARCHAR(100),
    "time" VARCHAR(100),
    "messageId" VARCHAR(100),
    "conversationId" VARCHAR(100),
    "url" VARCHAR(50),
    "geo" JSONB,
    "message" VARCHAR(50),

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);
