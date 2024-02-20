/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xro42xae25xoip6",
    "created": "2024-02-20 19:11:57.095Z",
    "updated": "2024-02-20 19:11:57.095Z",
    "name": "eee",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "90g3p8jq",
        "name": "field",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xro42xae25xoip6");

  return dao.deleteCollection(collection);
})
