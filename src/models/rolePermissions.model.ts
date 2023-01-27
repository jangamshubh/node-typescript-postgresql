import { Table, Model, Column, ForeignKey, DataType } from "sequelize-typescript";
import { Permission } from "./permissions.model";
import { Role } from "./roles.model";

@Table({
    tableName: "role_permissions",
})

export class RolePermissions extends Model {
  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER
  })
  roleId!: number;

  @ForeignKey(() => Permission)
  @Column({
    type: DataType.INTEGER
  })
  permissionId!: number;

}