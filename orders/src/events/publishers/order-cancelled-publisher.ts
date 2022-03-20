import { Subjects, Publisher, OrderCancelledEvent } from '@org103849343954/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}