const router = require('express').Router();

router.route('/').get((req, res) => {

    res.status(200).json('{documentation_link: "https://ijn-shalma.github.io/pgCOVAPI/"}');
});

module.exports = router;