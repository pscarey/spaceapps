INSERT INTO "source"("id","name","lat","lon","createdAt","updatedAt") VALUES (1,E'NSW',-33.8828933,151.2044161,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00');
INSERT INTO "season"("id","name","createdAt","updatedAt") VALUES (1,E'Summer',E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00');
INSERT INTO "season"("id","name","createdAt","updatedAt") VALUES (2,E'Autumn',E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00');
INSERT INTO "season"("id","name","createdAt","updatedAt") VALUES (3,E'Winter',E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00');
INSERT INTO "season"("id","name","createdAt","updatedAt") VALUES (4,E'Spring',E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00');
INSERT INTO "ingredient"("id","name","calories","daysToProduce","energyUsedToProduce","co2","createdAt","updatedAt") VALUES (1,E'Avocado',200,200,200,200,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00'), (2,E'Bread',200,200,200,200,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00'), (3,E'Nutella',600,20,200,200,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00');
INSERT INTO "ingredient_season"("ingredientId","seasonId","createdAt","updatedAt") VALUES (1,1,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00'),(1,2,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00'),(2,1,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00'),(2,2,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00'),(2,3,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00'),(2,4,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00'),(3,1,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00'),(3,2,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00'),(3,3,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00'),(3,4,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00');
INSERT INTO "ingredient_source"("ingredientId","sourceId","createdAt","updatedAt") VALUES (1,1,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00'),(3,1,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00'),(2,1,E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00');
INSERT INTO "recipe"("id","name","description","createdAt","updatedAt") VALUES (1,E'Smashed avo on toast',E'Classic smashed avo\'s on tasty toast',E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00'),(2,E'Nutella on toast',E'Classic nutella on toast',E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00');
INSERT INTO "recipeItem"("recipeId","ingredientId","quantity","unit","createdAt","updatedAt","id","name") VALUES (1,2,0.5,E'kg',E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00',1,E'Line 1'),(1,1,0.5,E'kg',E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00',2,E'Line 1'),(2,2,0.5,E'kg',E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00',3,E'Line 1'),(2,3,0.5,E'kg',E'2012-02-02 00:00:00+00',E'2012-02-02 00:00:00+00',4,E'Line 1');
