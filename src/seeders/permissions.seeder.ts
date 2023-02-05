import { Permission } from "../models/permissions.model";

export const seedPermissions = async () => {
  try {
    const seedData = [
      {
        'name': 'View All Roles',
        'description': 'View all Roles in the System',
        'isActive': true,
      },
      {
        'name': 'Add Role',
        'description': 'Add Role in the System',
        'isActive': true,
      },
      {
        'name': 'Edit Role',
        'description': 'Edit Role in the System',
        'isActive': true,
      },
      {
        'name': 'View Individual Role',
        'description': 'View Individual Role in the System',
        'isActive': true,
      },
      {
        'name': 'Delete Role',
        'description': 'Delete Role in the System',
        'isActive': true,
      },
      {
        'name': 'Get All Permissions',
        'description': 'Get All Permissions for particular in the System',
        'isActive': true,
      },
    ];

    await Permission.bulkCreate(seedData);
  } catch(error) {
    console.log(error);
  }
}