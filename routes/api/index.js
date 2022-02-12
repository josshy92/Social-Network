const router = require('express').Router();
const userRoutes = require('./user-routes');


router.use('/courses', courseRoutes);
router.use('/students', studentRoutes);

module.exports = router;