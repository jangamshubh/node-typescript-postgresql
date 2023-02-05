import { Table, Model, Column, DataType, BelongsToMany, HasMany } from "sequelize-typescript";
import { Role } from "./roles.model";
import { RolePermissions } from "./rolePermissions.model";
import { User } from "./users.model";
import { UserPermissions } from "./userPermissions.model";

@Table({
  tableName: "permissions",
})

export class Permission extends Model {
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

  @BelongsToMany(() => Role, () => RolePermissions)
  roles!: Role[];

  @BelongsToMany(() => User, () => UserPermissions)
  users!: User[];
}