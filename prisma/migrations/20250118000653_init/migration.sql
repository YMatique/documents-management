-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "role" TEXT NOT NULL DEFAULT 'LAWYER'
);

-- CreateTable
CREATE TABLE "Token" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME
);

-- CreateTable
CREATE TABLE "Cases" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "customerId" INTEGER NOT NULL,
    CONSTRAINT "Cases_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cases_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cases_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "caseId" INTEGER NOT NULL,
    CONSTRAINT "Document_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_name_key" ON "Customer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cases_title_key" ON "Cases"("title");
