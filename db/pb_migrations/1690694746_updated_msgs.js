migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qq9uh9riwfkl6f8")

  // update
  collection.schema.addField(new SchemaField({
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
      "displayFields": [
        "rollNo",
        "name",
        "dept"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qq9uh9riwfkl6f8")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
