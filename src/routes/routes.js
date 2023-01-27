const Router = require("express").Router;
const TestController = require("../controllers/testController.js");
const TestQuestionsController = require("../controllers/testQuestionController.js");
const TestAnswersController = require("../controllers/testAnswersController.js");
const TestResultsController = require("../controllers/testResultsController.js");
const CourseController = require("../controllers/courseController.js");
const CourseMaterialsController = require("../controllers/courseMaterialsController.js");
const UserController = require("../controllers/userController.js");
const authJwt = require("../middleware/authJwt.js")


const userController = new UserController()

const courseController = new CourseController()
const courseMaterialsController = new CourseMaterialsController()

const testController = new TestController()
const testQuestionController = new TestQuestionsController()
const testAnswersController = new TestAnswersController()
const testResultsController = new TestResultsController()


const router = Router()

router.get('/test', authJwt.verifyToken, testController.findAll);
router.get('/test/:id', authJwt.verifyToken,testController.findOne)
router.post('/test/add', authJwt.verifyToken, testController.create)
router.delete('/test/remove/:id', authJwt.verifyToken, testController.delete)
router.put('/test/update/:id', authJwt.verifyToken, testController.update)

router.post('/test/question/add', authJwt.verifyToken, testQuestionController.create)
router.get('/test/question/:id', authJwt.verifyToken, testQuestionController.findQuestionsWithId)

router.post('/test/answer/add', authJwt.verifyToken, testAnswersController.create)

router.get('/te/results',  authJwt.verifyToken, testResultsController.findAll)
router.get('/te/results/:userId&:testId',  authJwt.verifyToken, testResultsController.findLast)

router.get('/course',  authJwt.verifyToken, courseController.findAll)
router.get('/course/:id', authJwt.verifyToken, courseController.findOne)
router.post('/course/add', authJwt.verifyToken, courseController.create)
router.delete('/course/remove/:id', authJwt.verifyToken, courseController.delete)
router.put('/course/update/:id', authJwt.verifyToken, courseController.update)

router.post('/course/material/add', authJwt.verifyToken, courseMaterialsController.create)
router.get('/course/material/:id', authJwt.verifyToken, courseMaterialsController.findMaterialsWithId)

router.post('/user/signup', userController.signUp)
router.post('/user/signin', userController.signIn)



module.exports = router;
