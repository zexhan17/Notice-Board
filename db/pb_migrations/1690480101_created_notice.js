migrate((db) => {
  const collection = new Collection({
    "id": "a05y3mq9jcen189",
    "created": "2023-07-27 17:48:21.518Z",
    "updated": "2023-07-27 17:48:21.518Z",
    "name": "notice",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sjiw6gcc",
        "name": "author",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "c2tmqdtu",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "i6olnh14",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("a05y3mq9jcen189");

  return dao.deleteCollection(collection);
})
