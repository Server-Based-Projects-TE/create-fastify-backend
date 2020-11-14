export const NODE_HOST = process.env.NODE_HOST || '127.0.0.1';
export const NODE_PORT = process.env.NODE_PORT ? Number(process.env.NODE_PORT) : 3000;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const IS_DEV = NODE_ENV === 'development';
export const IS_PROD = NODE_ENV === 'production';
export const IS_TEST = NODE_ENV === 'test';

export const REDIS_URI = process.env.REDIS_URI || 'redis://localhost:6379/1';
export const SESSION_KEY = process.env.SESSION_KEY;
export const SESSION_SECRET = process.env.SESSION_SECRET || 'a secret with minimum length of 32 characters';
export const SESSION_TTL = process.env.SESSION_TTL ? Number(process.env.SESSION_TTL) : 864e3; // 1 day in seconds
