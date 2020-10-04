var express = require('express');
const { v4: uuidv4 } = require('uuid');
var multer  = require('multer');
var path = require('path');
var router = express.Router();

var userController = require('../controllers/userController');


//multer storage and filename
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../src/videos'),
    filename: function (req, file, cb) {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});


const upload = multer({storage: storage});


router.get('/', (req, res) => {
    userController.read_all()
        .then(
            (data) => {
                res.json(data);
            }
        )
        .catch(
            error => {
                res.json({ message: error });
            }
        );
}
);

router.get('/:userId', (req, res) => {
    userController.read_one(req.params.userId)
        .then(
            (data) => {
                res.json(data);
            }
        )
        .catch(
            error => {
                res.json({ message: error });
            }
        );
}
);

router.delete('/:userId', (req, res) => {
    userController.delete(req.params.userId)
        .then(
            (data) => {
                res.json(data);
            }
        )
        .catch(
            error => {
                res.json({ message: error });
            }
        );
}
);

router.put('/', (req, res) => {
    userController.update(req.body)
        .then(
            (data) => {
                res.json(data);
            }
        )
        .catch(
            error => {
                res.json({ message: error });
            }
        );
}
);

router.post("/uploadVideo", upload.single("video"), async (req, res) => {
    
    if (!req.file) {
        res.status(401).json({ error: 'Please provide a video' });
    }

    //Set video name
    req.body.videoLink = req.file.filename;

    userController.update(req.body)
    .then(
        (data) => {
            res.json(data);
        }
    )
    .catch(
        error => {
            res.json({message: error});
        }
    )
    console.log(req.file.filename);
    
    return res.status(200).json({ fileUrl: 'http://localhost:3000/videos/' + req.file.filename });
});

module.exports = router;
