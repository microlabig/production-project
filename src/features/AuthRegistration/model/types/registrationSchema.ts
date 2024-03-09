export interface RegistrationSchema {
    username: string;
    password: string;
    reqPassword: string;

    isLoading: boolean;
    error?: string;
}
