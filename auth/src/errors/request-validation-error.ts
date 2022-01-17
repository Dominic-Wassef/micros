import { ValidationError } from 'express-validator';
import { isConstructorDeclaration } from 'typescript';

export class RequestValidationError extends Error {
    statusCode = 400;
    constructor(public errors: ValidationError[]) {
        super();

        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.errors.map(err => {
            return { message: err.msg, field: err.param }
        });
    }
}
