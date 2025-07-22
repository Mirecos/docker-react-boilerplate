if( !process.env.JWT_SECRET ) {
    throw new Error("JWT_SECRET environment variable is not set");
}
if( !process.env.TOKEN_EXPIRATION_DAYS ) {
    throw new Error("TOKEN_EXPIRATION_DAYS environment variable is not set");
}
if( !process.env.PORT ) {
    throw new Error("PORT environment variable is not set");
}
if( !process.env.HOSTNAME ) {
    throw new Error("HOSTNAME environment variable is not set");
}
if( !process.env.DATABASE_URL ) {
    throw new Error("DATABASE_URL environment variable is not set");
}

export const port = parseInt(process.env.PORT as string);
export const hostname = process.env.HOSTNAME as string;
export const JWT_SECRET = process.env.JWT_SECRET as string;
export const days_token_expiry = parseInt(process.env.TOKEN_EXPIRATION_DAYS as string, 10);
