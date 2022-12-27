import Order from './models/order.js';
import * as orderService from './services/order-service.js';

const data = document.getElementById("dataOrder").innerHTML.split("\n");

const order = new Order(data[0], data[1], data[2]);

const total = orderService.total(order).toFixed(2);

console.log(`Pedido ${order.code}`);
console.log(`Valor Total R$${total}`);