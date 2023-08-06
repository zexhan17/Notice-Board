migrate((db) => {
  const collection = new Collection({
    "id": "qq9uh9riwfkl6f8",
    "created": "2023-07-30 05:04:39.803Z",
    "updated": "2023-07-30 05:04:39.803Z",
    "name": "msgs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rbsqzxsu",
        "name": "sender",
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
        "id": "dkr86fa2",
        "name": "msg",
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
  const collection = dao.findCollectionByNameOrId("qq9uh9riwfkl6f8");

  return dao.deleteCollection(collection);
})
