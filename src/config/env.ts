export const NODE_HOST = process.env.NODE_HOST || '127.0.0.1';
export const NODE_PORT = process.env.NODE_PORT ? Number(process.env.NODE_PORT) : 3000;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const IS_DEV = NODE_ENV === 'development';
export const IS_PROD = NODE_ENV === 'production';
export const IS_TEST = NODE_ENV === 'test';
