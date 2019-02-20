interface Events {
  [key: string]: Function[];
}

// Test case, unsubscribe and subscribe in response to emit()
export class EventEmitter {
  public events: Events;
  constructor(events?: Events) {
    this.events = events || {};
  }

  /**
   * subscribe
   */
  public subscribe(name: string, cb: Function) {
    (this.events[name] || (this.events[name] = [])).push(cb);

    return {
      release: () =>
        this.events[name] &&
        this.events[name].splice(this.events[name].indexOf(cb) >>> 0, 1)
    };
  }

  public emit(name: string, ...args: any[]): void {
    (this.events[name] || []).forEach(fn => fn(...args));
  }
}

export function fnEmitter(e?: Events) {
  let events: Events = e || {};

  return {
    events,
    subscribe: (name: string, cb: Function) => {
      (events[name] || (events[name] = [])).push(cb);

      return {
        release: () => {
          events[name] && events[name].splice(events[name].indexOf(cb) >>> 0, 1);
        }
      };
    },
    emit: (name: string, ...args: any[]) => {
      (events[name] || []).forEach(fn => fn(...args));
    }
  };
}
