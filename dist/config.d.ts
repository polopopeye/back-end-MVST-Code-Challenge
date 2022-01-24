declare const _default: (() => {
    postgres: {
        database: string;
        username: string;
        password: string;
        port: number;
        host: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    postgres: {
        database: string;
        username: string;
        password: string;
        port: number;
        host: string;
    };
}>;
export default _default;
