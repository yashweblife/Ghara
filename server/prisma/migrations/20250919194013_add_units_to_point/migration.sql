-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Point" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "source" TEXT NOT NULL,
    "units" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Point_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Point" ("date", "id", "source", "userId") SELECT "date", "id", "source", "userId" FROM "Point";
DROP TABLE "Point";
ALTER TABLE "new_Point" RENAME TO "Point";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
