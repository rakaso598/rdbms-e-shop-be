/*
  Warnings:

  - A unique constraint covering the columns `[userId,productId]` on the table `FavoriteProduct` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FavoriteProduct_userId_productId_key" ON "FavoriteProduct"("userId", "productId");
