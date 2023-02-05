import { RolePermissions } from "../models/rolePermissions.model";

export const seedRolePermissions = async () => {
  try {
    const seedData = [
      {
        'roleId': 1,
        'permissionId': 1,
      },
      {
        'roleId': 1,
        'permissionId': 2,
      },
      {
        'roleId': 1,
        'permissionId': 3,
      },
      {
        'roleId': 1,
        'permissionId': 4,
      },
      {
        'roleId': 1,
        'permissionId': 5,
      },
    ];

    await RolePermissions.bulkCreate(seedData);
  } catch(error) {
    console.log(error);
  }
}