// import mongoose from 'mongoose';
import mongoose = require('mongoose');

export class Database {
  static max = 10;

  constructor(host?: string) {
    this.host = host;
  }

  host: string;
  time = 0;

  async init(host?: string): Promise<void> {
    await mongoose.connect(host || this.host);
  }

  async connect(host?: string): Promise<void> {
    try {
      await this.init(host || this.host);
    } catch (error) {
      this.time += 1;
      if (this.time >= Database.max) {
        this.setTime(0);
        return;
      }
      await this.init(host || this.host);
    }
  }

  disConnect(): void {
    mongoose.disconnect();
  }

  setTime(time: number): void {
    this.time = time;
  }
}

export interface DatabaseInstance {
  host?: string;
  time?: number;
  init: (host?: string) => Promise<void>;
  connect: (host?: string) => Promise<void>;
  disConnect: VoidFunction;
  setTime: (time: number) => void;
}
