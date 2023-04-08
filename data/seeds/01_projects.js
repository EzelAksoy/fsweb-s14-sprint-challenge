/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("projects").insert([
    {
      project_name: "Sprint-14 Hafta Ödevi Yapılması",
      project_description:
        "14.Hafta Öğrenilmiş Olan Backend Uygulaması Yapılması",
    },
    {
      project_name: "Workintech Sprint Kontrolleri",
      project_description:
        "14.Haftaya Kadar Yapılmış Olan Ödevlerin Kontrolleri Yapılması",
    },
  ]);
  await knex("resources").insert([
    {
      resource_name: "Github",
      resource_description: "Projenin Github'dan Bilgisayara Klonlanması",
    },
    {
      resource_name: "Express",
      resource_description: "Backend Uygulamalarında Express Install Etmek",
    },
  ]);
  await knex("tasks").insert([
    {
      task_description:
        "Workintech 14 Spring Package.json ların Kontrol Edilmesi ",
      task_notes: "Knex yüklemesinde npx kullan",
      project_id: 1,
    },
    {
      task_description: "Workintech 14 Spring için Yapılmıs Testleri Geç ",
      task_notes: "Testler için Jest Kütüphanesini Kullan",
      project_id: 1,
    },
    {
      task_description: "Biten Projeleri GitHub'a Pushla ",
      task_notes: "Pushlamadan önce .gitignore lamaya unutma",
      project_id: 2,
    },
  ]);
  await knex("project_resources").insert([
    {
      project_id: 1,
      resource_id: 1,
    },
    {
      project_id: 2,
      resource_id: 1,
    },
    {
      project_id: 2,
      resource_id: 1,
    },
  ]);
};
