export interface IValidation {
    firstNameMessages?: {
        required: string
    },
    lastNameMessages?: {
        required: string
    },
    emailMessages: {
        required: string,
        email: string
    },
    passwordMessages: {
        required: string,
        minlength: string
    }
}