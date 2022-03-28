import { OrderCancelledEvent, Subjects, Listener, OrderStatus } from "@org103849343954/common";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/order";
import { queueGroupName } from "./queue-group-name";

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
    queueGroupName = "payments-service";

    async onMessage(data: OrderCancelledEvent["data"], msg: Message) {
        const order = await Order.findOne({
            _id: data.id,
            version: data.version - 1,
        });

        // If no order was found, throw an error
        if (!order) {
            throw new Error("Order not found");
        }

        // Set the order status to cancelled
        order.set({ status: OrderStatus.Cancelled });

        // Save the order
        await order.save();

        // Acknowledge the message
        msg.ack();
    }
}
