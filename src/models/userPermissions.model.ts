import { Table, Model, Column, ForeignKey, DataType } from "sequelize-typescript";
import { Permission } from "./permissions.model";
import { User } from "./users.model";

@Table({
    tableName: "user_permissions",
})

export class UserPermissions extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER
  })
  userId!: number;

  @ForeignKey(() => Permission)
  @Column({
    type: DataType.INTEGER
  })
  permissionId!: number;

}