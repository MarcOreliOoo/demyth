declare namespace NodeJS {
    interface ProcessEnv {
        MONGODB_URL: string;
        JSON_TOKEN_KEY: string;
        JSON_TOKEN_EXPIRE: string;
        JSON_REFRESH_TOKEN_KEY: string;
        JSON_REFRESH_TOKEN_EXPIRE: string;
        PORT: string;
    }
}
