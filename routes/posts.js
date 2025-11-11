const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Post List');
});
router.get('/postslocation', (req, res) => {
    res.send('Post Location');
});
router.get('/postsnew', (req, res) => {
    res.send('New Posts');
});

module.exports = router;