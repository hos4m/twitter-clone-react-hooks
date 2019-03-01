import { v4 as generateUuid } from 'uuid';
import faker from 'faker';

export const tweetsInitialValue = () => {
  return new Array(20).fill('test').map(_i => ({
    uuid: generateUuid(),
    date: faker.date.past(),
    value: faker.lorem.sentence(),
    author: {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      avatar: faker.image.avatar()
    }
  }));
};
