export default class APIError extends Error {
    success: boolean = false
    message: string = ''
    errors: string[] = []
    stack: string = ''
    constructor(
        public status: number,
        message: string,
        error = [],
        stack = ''
    ) {
        super(message);
        this.message = message
        this.errors = error;
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
} 