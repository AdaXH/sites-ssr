import { initialSSRDevProxy } from 'ssr-server-utils';
import { Application } from 'egg';
import { Database } from './common';
import port from './config/port';

class AppBootHook {
  app: Application;
  constructor(app) {
    this.app = app;
  }

  async connectDb() {
    const db = new Database(port[this.app.env]?.host);
    await db.connect();
  }

  async willReady() {
    await this.connectDb();
    await initialSSRDevProxy(this.app);
  }
}

export default AppBootHook;
