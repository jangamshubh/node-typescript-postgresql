import { Role } from "../models/roles.model";

export const seedRoles = async () => {
  try {
    const seedData = [
      {
        'name': 'Admin',
        'description': 'Admin Role for Application',
        'isActive': true,
      },
      {
        'name': 'User',
        'description': 'User Role for Application',
        'isActive': true,
      }
    ];

    await Role.bulkCreate(seedData);
  } catch(error) {
    console.log(error);
  }
}