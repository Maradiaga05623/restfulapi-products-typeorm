import {Application} from "express";
import {ProductsService} from "../services/Products.service";

export class ProductsController{
    products_service:ProductsService ;
    constructor(private app: Application){
        this.products_service = new ProductsService();
        this.routes();
    }
    private routes(){//rutas de los endpoints en postman
        
        this.app.route("/products/:id/summary")
        .get(this.products_service.getOneSummary);

        this.app.route("/products")
        .post(this.products_service.createOne);
/*
        this.app.route("/supplier/:id")
        .get(this.supplier_service.getOne)
        .put(this.supplier_service.updateOne)
        .delete(this.supplier_service.deleteOne);        */
        
        this.app.route("/products").get(this.products_service.getAll);//trae todos los registros
    }
}