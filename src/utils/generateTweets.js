import { v4 as generateUuid } from 'uuid';
import faker from 'faker';

export default numberOfTweetsToGenerate =>
  new Array(numberOfTweetsToGenerate).fill('test').map(_i => ({
    uuid: generateUuid(),
    date: faker.date.past(),
    value: faker.lorem.sentence(),
    author: {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      avatar: faker.image.avatar()
    }
  }));
