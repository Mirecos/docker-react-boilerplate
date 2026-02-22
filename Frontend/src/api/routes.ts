if( !process.env.REACT_APP_LOCAL_API_BASE_URL ) {
    throw new Error("REACT_APP_LOCAL_API_BASE_URL environment variable is not set");
}
export const baseUrl = process.env.REACT_APP_LOCAL_API_BASE_URL;

export const userRoutes = {
    update: `${baseUrl}/user/update`,
    delete: `${baseUrl}/user/delete`,
    createUser: `${baseUrl}/user/createUser`,
    isIdentified: `${baseUrl}/user/isIdentified`,
    register: `${baseUrl}/user/register`,
    login: `${baseUrl}/user/login`
};