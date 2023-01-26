import { Table, Model, Column, ForeignKey, DataType } from "sequelize-typescript";
import { Role } from "./roles.model";
import { User } from "./users.model";

@Table({
    tableName: "user_roles",
})

export class UserRoles extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER
  })
  userId!: number;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER
  })
  roleId!: number;

}