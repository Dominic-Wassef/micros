import { Publisher, Subjects, TicketCreatedEvent } from '@org103849343954/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
