import {Router} from 'express'

const router = Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Here is the list of all orders.");
  })
  .post((req, res) => {
    res.send("A new order has been created.");
  });

  export default router;