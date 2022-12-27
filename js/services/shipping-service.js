export function shipment(order){
    const amount = order.basic - (order.basic * (order.discount / 100));
    if(amount < 100 ){
        return 20;
    } else if(amount >= 100 && amount <= 200){
        return 12.0;
    } else {
        return 0.0;
    }
}