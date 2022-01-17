import { ValidationError } from 'express-validator';
import { isConstructorDeclaration } from 'typescript';

export class RequestValidationError extends Error {
    constructor(public errors: ValidationError[]) {
        super();

        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}
