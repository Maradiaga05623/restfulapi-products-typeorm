import {Application} from "express";
import {OrderDetailsService} from "../services/OrderDetails.service";

export class OrderDetailsController{
    OrderDetails_service:OrderDetailsService ;
    constructor(private app: Application){
        this.OrderDetails_service = new OrderDetailsService();
        this.routes();
    }
    private routes(){//rutas de los endpoints en postman
        
        /*this.app.route("/supplier/:id/summary")
        .get(this.supplier_service.getOneSummary);

        this.app.route("/supplier")
        .post(this.supplier_service.createOne);

        this.app.route("/supplier/:id")
        .get(this.supplier_service.getOne)
        .put(this.supplier_service.updateOne)
        .delete(this.supplier_service.deleteOne);        */
        
        this.app.route("/orderdetails").get(this.OrderDetails_service.getAll);
    }
}