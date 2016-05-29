module.exports = function (app) {
    app.use('/signup', require('./routes/signup'));
    app.use('/login', require('./routes/login'));
    app.use('/createBucketlist', require('./routes/createBucketlist'));
    app.use('/createGoal', require('./routes/createGoal'));
    app.use('/createMemory', require('./routes/createMemory'));
    app.use('/findBucketlist', require('./routes/findBucketlist'));
    app.use('/editBucketlist', require('./routes/editBucketlist'));
    app.use('/editGoal', require('./routes/editGoal'));
    app.use('/editMemory', require('./routes/editMemory'));
    app.use('/editUser', require('./routes/editUser'));
    app.use('/findGoals', require('./routes/findGoals'));
    app.use('/findStaticGoals', require('./routes/findStaticGoals'));
    app.use('/findMemories', require('./routes/findMemories'));
    app.use('/findAllMemories', require('./routes/findAllMemories'));
    app.use('/deleteBucketlist', require('./routes/deleteBucketlist'));
    app.use('/deleteGoal', require('./routes/deleteGoal'));
    app.use('/deleteMemory', require('./routes/deleteMemory'));
    app.use('/addStaticGoals', require('./routes/addStaticGoals'));
    app.use('/addAchievements', require('./routes/addAchievements'));
};