/* eslint-disable import/no-extraneous-dependencies */
/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from "miragejs";

/*
 * Faker Github repository: https://github.com/Marak/Faker.js#readme
 */
import faker from "faker";
/*
 * Aqui criamos factories, as factories são as "plantas baixas" do projeto,
   ela determina o que deve acontecer quando você precisar de X propriedade,
   aqui passamos os metodos (name, email, role)
  e definimos que quando precisarmos dessas propriedades o faker vai criar elas.

  para criar os users, usamos as seeds, veja a pasta "miragejs/seeds"
 */
export default {
  user: Factory.extend({
    name() {
      return faker.name.findName();
    },
    email() {
      return faker.internet.email();
    },
    imageUrl(){
      return faker.random.image();
    },
    role() {
      return faker.random.arrayElement(["admin", "user"]);
    },
    department() {
      return faker.random.arrayElement(["Sales", "Marketing", "IT"]);
    },
    mobile() {
      return faker.phone.phoneNumber();
    },
    address: {
      street() {
        return faker.address.streetAddress();
      },
      city() {
        return faker.address.city();
      },
      state() {
        return faker.address.state();
      },
      country() {
        faker.address.country();
      },
      zip() {
        return faker.address.zipCode();
      },
    },
  }),
};
