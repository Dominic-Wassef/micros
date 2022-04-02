import { Subjects, PaymentCreatedEvent, Publisher } from '@org103849343954/common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}

