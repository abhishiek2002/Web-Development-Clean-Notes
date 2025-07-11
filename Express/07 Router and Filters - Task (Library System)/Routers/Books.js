import {Router} from 'express'

const router = Router();

router
  .route("")
  .get((req, res) => {
    res.send("Here is the list of books.");
  })
  .post((req, res) => {
    console.log(req.body);
    res.send("Book has been added!");
  });

  export default router;