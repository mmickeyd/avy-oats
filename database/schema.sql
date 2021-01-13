@@ -0,0 +1,8 @@
DROP DATABASE IF EXISTS avyoats;
CREATE DATABASE avyoats;

\c avyoats;

CREATE TABLE forecasts (
  forecast TEXT
);