import {Router} from 'express';
import helloService from '../services/hello.service';
export const helloRouter = Router();

helloRouter.get('/hello', (req, res, next) => {
  helloService.getTheWord().then((word) => {
    res.json({
      hello: word
    });
  });
});


export default helloRouter;
