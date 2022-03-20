import { Publisher, OrderCreatedEvent, Subjects } from '@org103849343954/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}