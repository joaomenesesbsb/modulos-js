import * as shippingService from'./shipping-service.js';

export function total(order){
     const frete = shippingService.shipment(order);
     const amount = order.basic - (order.basic * (order.discount / 100));

     return amount + frete;
}