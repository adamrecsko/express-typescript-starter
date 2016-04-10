/// <reference path="typings/main.d.ts" />
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors  from 'cors';
import {PORT} from './config';
import helloRouter from './routes/hello.route';
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', helloRouter);

/*Very basic arror handling :)*/
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);
  res.send('Error');
});

app.listen(PORT, () => console.log(`started@${PORT}`));
