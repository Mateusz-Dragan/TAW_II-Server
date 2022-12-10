import {Router} from "express";
import TestController from "../controllers/testController.js";
import TestQuestionsController from "../controllers/testQuestionController.js";
import TestAnswersController from "../controllers/testAnswersController.js"
import TestResultsController from "../controllers/testResultsController.js";

const testController = new TestController()
const testQuestionController = new TestQuestionsController()
const testAnswersController = new TestAnswersController()
const testResultsController = new TestResultsController()
const router = Router()

router.get('/test', testController.findAll);
router.get('/test/:id',testController.findOne)
router.post('/test/add', testController.create)
router.delete('/test/remove/:id', testController.delete)

router.post('/test/question/add', testQuestionController.create)
router.get('/test/question/:id',testQuestionController.findQuestionsWithId)

router.post('/test/answer/add', testAnswersController.create)

router.get('/te/results', testResultsController.findAll)
router.get('/te/results/:id', testResultsController.findLast)

export default router;
