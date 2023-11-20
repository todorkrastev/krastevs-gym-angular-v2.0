import { Address } from "./address";
import { Customer } from "./customer";
import { Order } from "./order";
import { OrderItem } from "./order-item";

export class Purchase {
    customer: Customer = {
        firstName: '',
        lastName: '',
        email: ''
    };
    shippingAddress: Address = {
        street: '',
        city: '',
        state: '',
        country: '',
        zipCode: ''
    };
    billingAddress: Address = {
        street: '',
        city: '',
        state: '',
        country: '',
        zipCode: ''
    }
    order: Order = {
        totalQuantity: 0,
        totalPrice: 0
    }
    orderItems: OrderItem[] = [];
}
