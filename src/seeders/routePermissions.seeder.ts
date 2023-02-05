import { RoutePermission } from "../models/routePermissions.model";

export const seedRoutePermissions = async () => {
  try {
    const seedData = [
      {
        'url': '/users/',
        'method': 'GET',
        'permissionId': 1,
        'isActive': true,
      },
      {
        'url': '/users/',
        'method': 'POST',
        'permissionId': 2,
        'isActive': true,
      },
      {
        'url': '/users/:id',
        'method': 'PUT',
        'permissionId': 3,
        'isActive': true,
      },
      {
        'url': '/users/:id',
        'method': 'GET',
        'permissionId': 4,
        'isActive': true,
      },
      {
        'url': '/users/:id',
        'method': 'DELETE',
        'permissionId': 5,
        'isActive': true,
      },
      {
        'url': '/users/getAllPermissions',
        'method': 'GET',
        'permissionId': 6,
        'isActive': true,
      },
    ];

    await RoutePermission.bulkCreate(seedData);
  } catch(error) {
    console.log(error);
  }
}