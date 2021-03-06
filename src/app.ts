import express,{Application} from "express";

import bodyParser from "body-parser";
import cors from "cors";

import {config} from "dotenv";
import {resolve} from "path";

config({"path": resolve(__dirname,"../.env")});

import {createConnection} from "typeorm";

import {MainController} from "./controller/main.controller";
import {SupplierController} from "./controller/supplier.controller";
import {OrderDetailsController} from "./controller/OrderDetails.controller";
import {ProductsController} from "./controller/Products.controller";
import{CustomerController} from "./controller/Customers.controller";

class App{

    public app: Application;
    public main_controller: MainController;
    public supplier_controller: SupplierController;
    public orderdetails_controller: OrderDetailsController;
    public products_controller: ProductsController;
    public  customer_controller: CustomerController;

    constructor(){
        this.app = express();
        this.setConfig();
        this.setDBConnection();
        this.main_controller = new MainController(this.app);
        this.supplier_controller = new SupplierController(this.app);
        this.orderdetails_controller= new OrderDetailsController(this.app);
        this.products_controller= new ProductsController(this.app);
        this.customer_controller= new CustomerController(this.app)
    }

    private setConfig(){
        this.app.use(bodyParser.json({limit:"50mb"}));
        this.app.use(bodyParser.urlencoded({limit:"50mb"}));
        this.app.use(cors());
    }

    private setDBConnection(){
        createConnection().then(connection=>{
            console.log("BD connected");
        });
    }

}

export default new App().app;