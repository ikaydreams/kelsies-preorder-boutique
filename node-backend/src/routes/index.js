const express = require('express');
const router = express.Router();

// Example endpoints (implement logic as needed)
router.get('/categories', (req, res) => { res.send('Categories endpoint'); });
router.post('/categories', (req, res) => { res.send('Create category endpoint'); });

router.get('/products', (req, res) => { res.send('Products endpoint'); });
router.post('/products', (req, res) => { res.send('Create product endpoint'); });

router.get('/preorders', (req, res) => { res.send('PreOrders endpoint'); });
router.post('/preorders', (req, res) => { res.send('Create preorder endpoint'); });

router.post('/contact', (req, res) => { res.send('Contact endpoint'); });

module.exports = router;const express = require('express');
const IndexController = require('../controllers/index').IndexController;

const setRoutes = (app) => {
    const indexController = new IndexController();

    app.get('/', indexController.getIndex.bind(indexController));
};

module.exports = setRoutes;