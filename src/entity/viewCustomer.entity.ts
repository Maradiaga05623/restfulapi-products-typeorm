import {ViewEntity,ViewColumn} from "typeorm";

@ViewEntity({schema: "example", database: "ingreso_Vehiculos", name:"example.VIEWCustomers"})
export class VIEWCustomers{
    @ViewColumn()
    CustumerID: Number
    @ViewColumn()
  CustomerName: string
  @ViewColumn()
  SupplierID: number
  @ViewColumn()
  SupplierName :string
    @ViewColumn()
    mes : number
    @ViewColumn()
    anio: number
    @ViewColumn()
    total : number
    @ViewColumn()
    SuperoPromedio: number
    @ViewColumn()
    PorcentajeVentaMensual: number

}