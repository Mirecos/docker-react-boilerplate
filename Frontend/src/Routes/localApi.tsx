if( !process.env.LOCAL_API_BASE_URL ) {
    throw new Error("LOCAL_API_BASE_URL environment variable is not set");
}
export const baseUrl = process.env.LOCAL_API_BASE_URL || 'ass';