//controller for admin router
var path = require("path");
var mongoose = require('mongoose');
const service = mongoose.model('service');


//view all services
exports.view_all_services = function(){
    return new Promise(function(resolve, reject) {
        service.find()
          .exec()
          .then(services => {
            // Found, a collection will be returned
            resolve(services);
          })
          .catch(err => {
            reject(err);
          });
      });
};

//view one service by id
exports.view_one_service = function(serviceId){
    return new Promise(function(resolve, reject) {
        service.findById(serviceId)
          .exec()
          .then(service => {
            // Found, one object will be returned
            resolve(service);
          })
          .catch(err => {
            // Find/match is not found
            reject(err);
          });
      });
};

//add new serivce
exports.create_service = function(newService){
    console.log(newService);
    return new Promise(function(resolve, reject) {
        service.create(newService, (error, item) => {
          if (error) {
            // Cannot add item
            return reject(error.message);
          }
          //Added object will be returned
          return resolve(item);
        });
      });
};

//update existing service
exports.update_service = function(body){  
    return new Promise(function(resolve, reject) {
        let Service = body;
        console.log(Service);
        service.replaceOne(
          { "_id": Service._id },
          Service,
          { multi: false }
        )
          .exec()
          .then(() => {
            // Found, one object will be returned
            console.log("Success Update.");
            resolve();
          })
          .catch(err => {
            // Find/match is not found
            console.log("Update Failed.");
            console.log(err);
            reject();
          });
      });
};

//delete service by id
exports.delete_service = function(serviceId){
    return new Promise(function(resolve, reject) {
        service.findByIdAndRemove(serviceId, error => {
          if (error) {
            // Cannot delete item
            return reject(error.message);
          }
          // Return success, but don't leak info
          return resolve();
        });
      });
};

//process image upload
exports.resizeImage = function(){
  

}
