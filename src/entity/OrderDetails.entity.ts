import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"example", database:"ingreso_vehiculos", name:"OrderDetails"})
export class OrderDetails{
    @PrimaryColumn()
    OrderDetailID: number;

    @Column()
    OrderID: number;

    @Column()
    ProductID: number;

    @Column()
    Quantity: number;

}
/*
export interface ISupplier{    
    SupplierID: number;
    SupplierName: string;
    Address: string;
    City: string;
    PostalCode: string;
    Country: string;
    Phone: string;
}

export interface IResult{
    Successed: boolean;
    MSG: string
}*/