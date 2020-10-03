var express = require('express');
var router = express.Router();
var path = require('path');
var serviceController = require('../controllers/serviceController');
var multer  = require('multer');
const Resize = require('../controllers/resizeImage');
const getStream = require('get-stream');


//multer storage and filename
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../src/images'),
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});


const upload = multer();
  
 // Get all services
 router.get("/", (req, res) => {
   serviceController.view_all_services()
     .then(data => {
       res.json(data);
     })
     .catch(err => {
       res
         .status(500)
         .json({ message: err })
         .end();
     });
 });
 
 // Get one service by id
 router.get("/:serviceId", (req, res) => {
   serviceController.view_one_service(req.params.serviceId)
     .then(data => {
       res.json(data);
     })
     .catch(err => {
       res.status(404).json({ message: "Resource not found" });
     });
 });
 
 // Add new service
 router.post("/", (req, res) => {
   serviceController.create_service(req.body)
     .then(data => {
       res.json(data);
     })
     .catch(error => {
       res.status(500).json({ message: error });
     });
 });
 
 // Edit existing service by id
 router.put("/", (req, res) => {
    serviceController.update_service(req.body)
     .then(() => {
       res.json({
         message:
           "update service with Id: " +
           req.body._id +
           " to " +
           req.body._id
       });
     })
     .catch(err => {
       res.status(404).json({ message: "Could not update person" + err });
     });
 });
 
 // Delete service by id
 router.delete("/:serviceId", (req, res) => {
   serviceController.delete_service(req.params.serviceId)
     .then(() => {
       res.status(204).end();
     })
     .catch(() => {
       res.status(404).json({ message: "Resource not found" });
     });
 });


 router.post("/uploadImage",upload.single("image"), async(req, res) => {

  const imagePath = path.join(__dirname, '../src/images');
  const fileUpload = new Resize(imagePath);

  if (!req.file) {
    res.status(401).json({error: 'Please provide an image'});
  }

  const filename = await fileUpload.save(req.file.buffer);
  return res.status(200).json({ fileUrl: 'http://172.104.66.32:3000/'+ path.join(__dirname, '../src/images/') + filename});
});


module.exports = router;
