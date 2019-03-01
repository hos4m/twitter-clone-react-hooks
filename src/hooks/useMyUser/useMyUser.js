import { useState, useEffect } from 'react';
import faker from 'faker';

export default function useMyUser() {
  const [mySuperCoolUser, updateMySuperCoolUser] = useState({});

  useEffect(() => {
    updateMySuperCoolUser({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      avatar: faker.image.avatar()
    });
  }, []);

  return mySuperCoolUser;
}
