// `Proje` modeli buraya

const db = require("../../data/dbConfig");

const getAllprojects = async function () {
  let projects = await db("projects");
  let checkedProjects = projects.map((item) => {
    return { ...item, project_completed: item.project_completed === 1 };
  });
  return checkedProjects;
};

const getById = async function (project_id) {
  let Id = await db("projects").where("project_id", project_id).first();
  return Id;
};

const createProjects = async function (project) {
  let [NewProjects] = await db("projects").insert(project);
  return getById(NewProjects);
};

module.exports = { getAllprojects, getById, createProjects };
