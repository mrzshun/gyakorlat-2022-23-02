https://github.com/szerveroldali/leirasok/blob/main/SequelizeAsszociaciok.md
https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
https://aws.amazon.com/what-is/restful-api/

REST API végpontok listája:
GET /categories //lekér minden kategóriát
GET /categories/:id //lekér egy kategóriát ID alapján

POST /categories //kategória létrehozás

PATCH /categories/:id //kategória módosítás ID alapján
PUT /categories/:id //kategória módosítás ID alapján

DELETE /categories //kitörli az összes kategóriát
DELETE /categories/:id //kitöröl egy kategóriát ID alapján

Fastify:

https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/