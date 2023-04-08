// bu`Task` modeli buraya
const db = require("../../data/dbConfig");

const getAllTasks = async function () {
  let taks = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
  let checkedTasks = taks.map((item) => {
    return { ...item, task_completed: item.task_completed === 1 };
  });
  return checkedTasks;
};

const getById = async function (task_id) {
  let Id = await db("tasks").where("task_id", task_id).first();
  return Id;
};

const createTasks = async function (task) {
  let [NewTasks] = await db("tasks").insert(task);
  return getById(NewTasks);
};

module.exports = { getAllTasks, getById, createTasks };
