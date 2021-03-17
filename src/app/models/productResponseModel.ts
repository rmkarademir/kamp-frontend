import { Product } from "./product";
import { responseModel } from "./responseModel";

export interface productResponseModel extends responseModel{// extends inherit demek yani extends den sonraki kısmın içeriğini alma.
    data:Product[]
    
    
}