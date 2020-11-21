export { name as PACKAGE_NAME, version as PACKAGE_VERSION } from './release.json';
export const NODE_HOST = process.env.NODE_HOST || '127.0.0.1';
export const NODE_PORT = process.env.NODE_PORT ? Number(process.env.NODE_PORT) : 3000;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const IS_DEV = NODE_ENV === 'development';
export const IS_PROD = NODE_ENV === 'production';
export const IS_TEST = NODE_ENV === 'test';

export const REDIS_URI = process.env.REDIS_URI || 'redis://localhost:6379/1';
export const SESSION_KEY = process.env.SESSION_KEY || 'U7SkyCUsC5NE5q1VgSNouUGZYE/iYdPlS7IkZj0MziA=';
export const SESSION_TTL = process.env.SESSION_TTL ? Number(process.env.SESSION_TTL) : 864e2; // 1 day in seconds
