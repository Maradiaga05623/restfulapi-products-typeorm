import {ViewEntity,ViewColumn} from "typeorm";

@ViewEntity({schema: "example", database: "ingreso_vehiculos", name:"VIEWProducts_Supplier_BY_NAME"})
export class ViewProductsandSupplierByName{
    @ViewColumn()
    ProductID: number;
    @ViewColumn()
 ProductName :string
    @ViewColumn()
    SupplierName: string
    @ViewColumn()
    Price: number
    @ViewColumn()
    Unit: string

}