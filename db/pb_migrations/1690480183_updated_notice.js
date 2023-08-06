migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a05y3mq9jcen189")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5ulqpann",
    "name": "session",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zybrqqkc",
    "name": "dept",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zhbbne8n",
    "name": "universal",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a05y3mq9jcen189")

  // remove
  collection.schema.removeField("5ulqpann")

  // remove
  collection.schema.removeField("zybrqqkc")

  // remove
  collection.schema.removeField("zhbbne8n")

  return dao.saveCollection(collection)
})
