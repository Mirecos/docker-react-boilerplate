if( !process.env.REACT_APP_API_BASE_URL ) {
    throw new Error("REACT_APP_API_BASE_URL environment variable is not set");
}
export const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const _isIdentified = baseUrl + 'user/isIdentified';