/*
  Warnings:

  - You are about to drop the column `items_id` on the `orders` table. All the data in the column will be lost.
  - Added the required column `order_id` to the `order_items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_items_id_fkey";

-- AlterTable
ALTER TABLE "order_items" ADD COLUMN     "order_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "items_id";

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
