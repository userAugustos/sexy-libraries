/*
 * Mirage JS guide on Seeds: https://miragejs.com/docs/data-layer/factories#in-development
 */

// toda vez que o mirage interceptar uma requisição do front, ele vai executar a seed

const usersSeeder = server => {
  /*
   * This will create in the in memory DB 10 objects
   * of the Factory `user`. Moreover it creates a
   * random number of messages and assign to each
   * and every user, making use of relationships.
   */
  server.createList("user", 3);
};

export default function seeds(server) {
  server.loadFixtures();
  usersSeeder(server);
}
