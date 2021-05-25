import { Framework } from '@midwayjs/koa';
import { Bootstrap } from '@midwayjs/bootstrap';

const web = new Framework().configure({
  port: 7001,
});

Bootstrap.load(web)
  .run()
  .then(() => {
    console.log('Your application is running at http://localhost:7001');
  });
