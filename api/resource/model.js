// `Resource` modeli buraya
const db = require("../../data/dbConfig");

const getAllResources = async function () {
  let resources = await db("resources");

  return resources;
};

const createResources = async function (resource) {
  let NewResource = await db("resources").insert(resource).first();
  return await db("resources").where("resource_id", NewResource);
};

module.exports = { getAllResources, createResources };
