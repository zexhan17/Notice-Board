migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a05y3mq9jcen189")

  // remove
  collection.schema.removeField("zhbbne8n")

  // remove
  collection.schema.removeField("hpwge5uw")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a05y3mq9jcen189")

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hpwge5uw",
    "name": "whole_dept",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
