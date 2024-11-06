/*
  Warnings:

  - The primary key for the `Catalogue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Inventory` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Catalogue" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "daysTillExpired" INTEGER NOT NULL
);
INSERT INTO "new_Catalogue" ("daysTillExpired", "id", "manufacturer", "name") SELECT "daysTillExpired", "id", "manufacturer", "name" FROM "Catalogue";
DROP TABLE "Catalogue";
ALTER TABLE "new_Catalogue" RENAME TO "Catalogue";
CREATE TABLE "new_Inventory" (
    "expirationDate" DATETIME NOT NULL,
    "dateReceived" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    PRIMARY KEY ("dateReceived", "productId"),
    CONSTRAINT "Inventory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Catalogue" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Inventory" ("dateReceived", "expirationDate", "productId", "quantity") SELECT "dateReceived", "expirationDate", "productId", "quantity" FROM "Inventory";
DROP TABLE "Inventory";
ALTER TABLE "new_Inventory" RENAME TO "Inventory";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
