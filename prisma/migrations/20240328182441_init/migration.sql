-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100),
    "nickname" VARCHAR(50) NOT NULL,
    "dni" VARCHAR(20) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone_number" VARCHAR(20),
    "password" VARCHAR(255) NOT NULL,
    "organization_id" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "birthday" TIMESTAMP(6) NOT NULL,
    "gender" VARCHAR(20),
    "city" VARCHAR(100),
    "province" VARCHAR(100),
    "country" VARCHAR(100),
    "postal_code" VARCHAR(20),
    "score" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "User_dni_key" ON "User"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
