import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { Role } from "./roles.model";
import { UserPermissions } from "./userPermissions.model";
import { UserRoles } from "./userRoles.model";
import { Permission } from "./permissions.model";

@Table({
  tableName: "users",
})

export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName!: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  mobileNumber!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  emailVerified!: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  emailVerifiedAt!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  mobileVerified!: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  mobileVerifiedAt!: string;
 
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles!: Role[];

  @BelongsToMany(() => Permission, () => UserPermissions)
  permissions!: Permission[];
}