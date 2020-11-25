const { index, show, findId } = require('../controllers/people');

module.exports = router => {
    router.get('/', index);
    router.get('/people', show);
    router.get('/people/:id', findId);
    return router;
};