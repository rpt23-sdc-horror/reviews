const couchbase = require("couchbase");

const cluster = new couchbase.Cluster("couchbase://localhost", {
  username: "Administrator",
  password: "password",
});
var bucket = cluster.bucket('default');
var coll = bucket.defaultCollection();

const bucket = cluster.bucket("travel-sample");

const airline = {
  type: "airline",
  id: 8091,
  callsign: "CBS",
  iata: null,
  icao: null,
  name: "Couchbase Airways",
};

const upsertDocument = async (doc) => {
  try {
    // key will equal: "airline_8091"
    const key = `${doc.type}_${doc.id}`;
    const result = await collection.upsert(key, doc);
    console.log("Upsert Result: ");
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

upsertDocument(airline);

const getAirlineByKey = async (key) => {
  try {
    const result = await collection.get(key);
    console.log("Get Result: ");
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};