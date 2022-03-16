import { Publisher, Subjects, TicketUpdatedEvent } from '@org103849343954/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
