//https://github.com/Belphemur/node-json-db

import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

var db = new JsonDB(new Config("app-data", true, true, '/'));

module.exports.db = db;