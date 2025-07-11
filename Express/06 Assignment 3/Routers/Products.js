import {Router} from 'express'

const router = Router();

router
  .route("")
  .get((req, res) => {
    res.send("Here is the list of all products.");
  })
  .post((req, res) => {
    res.send("A new product has been created.");
  });

  export default router;