import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Permission } from "./permissions.model";

@Table({
  tableName: "route_permissions",
})

export class RoutePermission extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  url!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  method!: string;

  @ForeignKey(() => Permission)
  @Column({
    type: DataType.INTEGER,
  })
  permissionId!: number;
  
  @BelongsTo(() => Permission)
  permission!: Permission;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isActive!: boolean;
}