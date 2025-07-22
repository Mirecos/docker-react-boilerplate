if( !process.env.REACT_APP_LOCAL_API_BASE_URL ) {
    throw new Error("REACT_APP_LOCAL_API_BASE_URL environment variable is not set");
}
export const baseUrl = process.env.REACT_APP_LOCAL_API_BASE_URL;