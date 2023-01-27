import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { User } from "./users.model";
import { UserRoles } from "./userRoles.model";
import { Permission } from "./permissions.model";
import { RolePermissions } from "./rolePermissions.model";

@Table({
  tableName: "roles",
})

export class Role extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description!: string;
  
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isActive!: boolean;

  @BelongsToMany(() => User, () => UserRoles)
  users!: User[];

  @BelongsToMany(() => Permission, () => RolePermissions)
  permissions!: Permission[];
}