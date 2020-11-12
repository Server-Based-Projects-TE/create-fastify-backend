import session from 'fastify-session';
import { EventEmitter } from 'events';

export type MemoryStoreOptions<T> = { store?: Map<string, T>; prefix?: string };

export class MemoryStore<T = Record<string, unknown>> extends EventEmitter implements session.SessionStore {
  private store: Map<string, T>;
  private readonly prefix: string;

  constructor({ store = new Map(), prefix = 'sess:' }: MemoryStoreOptions<T> = {}) {
    super();
    this.store = store;
    this.prefix = prefix;
  }

  private getKey(sessionId: string) {
    return `${this.prefix}${sessionId}`;
  }

  set(sessionId: string, session: T, callback: (err?: Error) => void): void {
    this.store.set(this.getKey(sessionId), session);
    callback();
  }

  get(sessionId: string, callback: (err?: Error, session?: T) => void): void {
    const session = this.store.get(this.getKey(sessionId));
    callback(undefined, session);
  }

  destroy(sessionId: string, callback: (err?: Error) => void): void {
    this.store.delete(this.getKey(sessionId));
    callback();
  }
}

// store.all(callback)
// Optional

// This optional method is used to get all sessions in the store as an array. The callback should be called as callback(error, sessions).

// store.destroy(sid, callback)
// Required

// This required method is used to destroy/delete a session from the store given a session ID (sid). The callback should be called as callback(error) once the session is destroyed.

// store.clear(callback)
// Optional

// This optional method is used to delete all sessions from the store. The callback should be called as callback(error) once the store is cleared.

// store.length(callback)
// Optional

// This optional method is used to get the count of all sessions in the store. The callback should be called as callback(error, len).

// store.get(sid, callback)
// Required

// This required method is used to get a session from the store given a session ID (sid). The callback should be called as callback(error, session).

// The session argument should be a session if found, otherwise null or undefined if the session was not found (and there was no error). A special case is made when error.code === 'ENOENT' to act like callback(null, null).

// store.set(sid, session, callback)
// Required

// This required method is used to upsert a session into the store given a session ID (sid) and session (session) object. The callback should be called as callback(error) once the session has been set in the store.

// store.touch(sid, session, callback)
// Recommended

// This recommended method is used to "touch" a given session given a session ID (sid) and session (session) object. The callback should be called as callback(error) once the session has been touched.

// This is primarily used when the store will automatically delete idle sessions and this method is used to signal to the store the given session is active, potentially resetting the idle timer.
