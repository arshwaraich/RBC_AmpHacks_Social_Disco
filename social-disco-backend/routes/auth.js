var express = require('express');
var router = express.Router();

var authController = require('../controllers/authController');

router.get('/',function(req,res){
    res.send('Authentication API path');
});

router.post('/login', (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        authController.login(username, password)
        .then(
            (data) => {
                res.json(data);
            }
        )
        .catch(
            error => {
                res.json(error);
            }
        );
    }
);

router.post('/register', (req, res) => {
        authController.register(req.body)
        .then(
            (data) => {
                res.json(data);
            }
        )
        .catch(
            error => {
                res.json({message: error});
            }
        );
    }
);

module.exports = router;
