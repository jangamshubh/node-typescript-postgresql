import { User } from "../models/users.model";
import bcrypt from 'bcrypt';

export const seedUsers = async () => {
  try {
    const seedData = [
      {
        'firstName': 'Admin',
        'lastName': 'Demo',
        'email': 'admin@demo.com',
        'password': 'admin@123',
      },
      {
        'firstName': 'User',
        'lastName': 'Demo',
        'email': 'user@demo.com',
        'password': 'user@123',
      },
    ];

    function generatePassword(value: any, index: any) {
      seedData[index]['password'] = bcrypt.hashSync(value['password'], 10);
    }

    seedData.forEach(generatePassword);

    await User.bulkCreate(seedData);
  } catch(error) {
    console.log(error);
  }
}