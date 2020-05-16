import {Request, Response} from "express";
import {getConnection} from "typeorm";
import{Products,IProducts,IResult} from "../entity/Products.entity";
import {ViewProductsandSupplierByName} from "../entity/ProdAndSupByName.entity";//ver nombres de los productos y proveedores


export class ProductsService{

    public async getAll(req: Request, res: Response){//traer todos  los registros de  la tabla
        const products = await getConnection().getRepository(Products).find();
        res.status(200).json(products);//aqui va el nombre de la constante
    }
    public async getOneSummary(req:Request, res: Response){
        const products : ViewProductsandSupplierByName[] = await getConnection().getRepository(ViewProductsandSupplierByName)
        .find({ where: {ProductID: req.params.id} });
        res.status(200).json(products[0]);
    }


    public async createOne(req: Request, res: Response){
        const p: IProducts = req.body;
        const result: IResult[] = await getConnection().query(`EXEC example.SP_CREATE_PRODUCTS
        @ProductID= ${p.ProductID},
        @ProductName=' ${p.ProductName} ',
        @SupplierID= ${p.SupplierID},
        @CategoryID= ${p.CategoryID},
        @Unit =' ${p.Unit}',
        @Price= ${p.Price}
        `);
        res.status(201).json(result[0]);
    }




}