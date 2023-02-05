import { UserRoles } from "../models/userRoles.model";

export const seedUserRoles = async () => {
  try {
    const seedData = [
      {
        'userId': 1,
        'roleId': 1,
      },
      {
        'userId': 2,
        'roleId': 2,
      },
    ];

    await UserRoles.bulkCreate(seedData);
  } catch(error) {
    console.log(error);
  }
}