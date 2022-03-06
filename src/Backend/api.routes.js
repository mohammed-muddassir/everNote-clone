import express from 'express';
import notesController from './Controller/notesController.js';
const router=express.Router();

router.route("/").get(notesController.apiGetNotes);
router.route("/update/:id").patch(notesController.apiUpdateNotes);
router.route("/post").post(notesController.apiPostNotes);
router.route("/delete/:id").delete(notesController.apiDeleteNotes);


export default router;