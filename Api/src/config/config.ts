if( !process.env.JWT_SECRET ) {
    throw new Error("JWT_SECRET environment variable is not set");
}
if( !process.env.TOKEN_EXPIRATION_DAYS ) {
    throw new Error("TOKEN_EXPIRATION_DAYS environment variable is not set");
}

export const JWT_SECRET = process.env.JWT_SECRET as string;
export const days_token_expiry = process.env.TOKEN_EXPIRATION_DAYS;
