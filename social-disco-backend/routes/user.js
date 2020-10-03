var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');


//multer storage and filename
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../src/videos'),
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});


const upload = multer();


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

router.post("/uploadImage", upload.single("image"), async (req, res) => {

    const imagePath = path.join(__dirname, '../src/images');
    const fileUpload = new Resize(imagePath);

    if (!req.file) {
        res.status(401).json({ error: 'Please provide an image' });
    }

    const filename = await fileUpload.save(req.file.buffer);
    return res.status(200).json({ fileUrl: 'http://172.104.66.32:3000/' + path.join(__dirname, '../src/images/') + filename });
});

module.exports = router;
