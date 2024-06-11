/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    { id: 1, name: "laptop", price: 1000 },
    { id: 2, name: "desktop", price: 1500 },
    { id: 3, name: "mobile", price: 500 },
    { id: 4, name: "tablet", price: 300 },
    { id: 5, name: "smartwatch", price: 200 },
  ]);
};
