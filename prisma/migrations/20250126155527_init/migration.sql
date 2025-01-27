-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "tech" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "imageUrl" VARCHAR(255) NOT NULL,
    "linkGithub" VARCHAR(255) NOT NULL,
    "linkDemo" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
