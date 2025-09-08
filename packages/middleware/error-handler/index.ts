export class AppError extends Error {
    public readonly statuscode: number;
    public readonly isOperational: boolean;
    public readonly details: any;

    constructor(message:String, statuscode:number, isOperational = true, details?: any){
        super(message);
        this.statuscode = statuscode;
        this.isOperational = isOperational;
        this.details = details;
        Error.capturestackTrace(this);
    }
}

// Not found error
export class NotFoundError extends AppError{
    constructor(message = "Resource is not found") {
        super(message, 404)
    }
}

// Validation Error (use for joi/zod/react-hook-form validation errors)
export class ValidationError extends AppError {
    constructor(message = "Invalid request data", details?: any) {
        super(message, 400, true, details)
    }
}


// JWT Auth error
export class AuthError extends AppError {
    constructor(message = "Unauthroised") {
        super(message, 401);
    }
}

// forbidden Access
export class ForbiddenError extends AppError {
    constructor(message = "Forbidden Access") {
        super(message,403)
    }
}

// Database Error
export class DatabaseError extends AppError {
    constructor(message = "Database Error", details?: any){
        super(message, 500, true, details)
    }
}


// Rate limiting error (if user exceeds API limit)
export class RateLimitError extends AppError {
    constructor(message = "Too many requests, please try again later") {
        super(message, 429)
    }
}

// test
