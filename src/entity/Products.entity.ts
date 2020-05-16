import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"example", database:"ingreso_vehiculos", name:"Products"})
export class Products{
    @PrimaryColumn()
    ProductID: number;

    @Column()
    ProductName: string ;
    @Column()
    SupplierID: number;
    @Column()
    CategoryID: number;
    @Column()
    Unit : string;
    @Column()
    Price: number;

  
}
export interface IProducts{    
    ProductID: number;
    ProductName: string;
    SupplierID: number;
    CategoryID: number;
    Unit : string;
    Price: number;
}
export interface IResult{
    Successed: boolean;
    MSG: string
}