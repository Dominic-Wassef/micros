import { Subjects, Publisher, ExpirationCompleteEvent } from '@org103849343954/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
