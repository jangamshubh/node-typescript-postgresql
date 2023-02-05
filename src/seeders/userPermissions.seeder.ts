import { UserPermissions } from "../models/userPermissions.model";

export const seedUserPermissions = async () => {
  try {
    const seedData = [
      {
        'userId': 1,
        'permissionId': 6,
      },
    ];

    await UserPermissions.bulkCreate(seedData);
  } catch(error) {
    console.log(error);
  }
}