function getChai(kind: number | string){
    if(typeof kind === "string"){
        return `Making ${kind} chai`;
    }
    return `Chai order: ${kind}`;
}

function serveChai(msg?:string) {
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

// exhaustive check to check the type

function orderChai(size: 'small'|'large'|'medium'| number){
    if (size ==="small"){
        return `small cutting chai...`;
    }
    if(size ==="medium" || size === 'large'){
        return`make extra chai....`;
    }
    return `chai order ${size}`;
}

class KulhadChai{
    serve(){
        return `Serving Kulhad Chai`;
    }
}
class CuttingChai{
    serve(){
        return `Serving Cutting Chai`;
    }
}

function serve(chai: KulhadChai | CuttingChai){
    if( chai instanceof KulhadChai){
        return chai.serve();
    }
}

type chaiOrder = {
    type: string;
    sugar: number;
}

function isChaiOrder(obj : any): obj is chaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.type === "number"
    )
}

function serveOrder(item:chaiOrder | string) {
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }    
    return `Serving Custom Chai: ${item}`
}

type MasalaChai = {type: "Masala"; spicelevel: number }
type GingerChai = {type: "Ginger"; amount: number }
type ElaichiChai = {type: "Elaichi"; aroma: number }

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order:Chai) {
    switch (order.type) {
        case 'Masala':
            return `Masala Chai`
            break;
        case "Elaichi":
            return `Elaichi Chai`
            break;
        case 'Ginger':
            return `Ginger Chai`
            break;
    }
}
function brew(order:MasalaChai|GingerChai) {
    if("spicelevel" in order){
        //
    }
}

// function isStringArray(arr:unknown): arr is string[] {
    
// }