import { UUID } from "crypto";

export interface Product{
    id:UUID,
    name:string,
    description:string,
    category:string,
    unitprice:number


}