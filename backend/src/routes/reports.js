<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const { getComprehensiveReports } = require('../controllers/reportsController');

router.get('/', authMiddleware, getComprehensiveReports);

module.exports = router;

=======
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const { getComprehensiveReports } = require('../controllers/reportsController');

router.get('/', authMiddleware, getComprehensiveReports);

module.exports = router;

>>>>>>> 7257175 (update project)
