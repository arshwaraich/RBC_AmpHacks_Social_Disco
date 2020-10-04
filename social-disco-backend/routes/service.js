var express = require('express');
var router = express.Router();
var serviceController = require('../controllers/serviceController');


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




module.exports = router;
