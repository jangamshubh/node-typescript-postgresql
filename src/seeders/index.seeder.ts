import connection from "../db/connection";
import { seedPermissions } from "./permissions.seeder";
import { seedRoles } from "./roles.seeder";
import { seedRolePermissions } from "./rolePermissions.seeder";
import { seedRoutePermissions } from "./routePermissions.seeder";
import { seedUsers } from "./users.seeder";
import { seedUserPermissions } from "./userPermissions.seeder";
import { seedUserRoles } from "./userRoles.seeder";

export const seedAll = async() => {
  try {
    await connection.sync({ force: true }).then(() => {
      seedRoles();
      seedUsers();
      seedPermissions();
    });
    await connection.sync().then(() => {
      seedUserRoles();
      seedRolePermissions();
      seedUserPermissions();
      seedRoutePermissions();
    })
  } catch(error) {
    console.log(error);
  }
}

// Running this function
seedAll();