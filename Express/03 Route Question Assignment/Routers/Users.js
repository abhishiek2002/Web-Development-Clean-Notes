import {Router} from 'express'

const router = Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Here is the list of all users.");
  })
  .post((req, res) => {
    res.send("A new user has been added.");
  });

  export default router;