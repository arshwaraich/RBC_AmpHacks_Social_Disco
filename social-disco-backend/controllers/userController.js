//Controlled for user CRUD

var path = require("path");
var mongoose = require('mongoose');
const user = mongoose.model('users');
const bcrypt = require('bcryptjs');

exports.read_all = () => {
    return new Promise(
        (resolve, reject) => {
            user.find()
            .exec()
            .then(users => {
              resolve(users);
            })
            .catch(err => {
              reject(err);
            });
        }
    );
};

exports.read_one = (userId) => {
    return new Promise(
        (resolve, reject) => {
            user.findById(userId)
            .exec()
            .then(user =>{
                resolve(user);
            })
            .catch( err => {
                
                reject(err.message);
            }
            );
        }
    );
};


exports.delete = (userId) => {
    return new Promise(
        (resolve, reject) => {
            user.findByIdAndDelete(userId,
                err => {
                    if(err) {
                        return reject(err.message);
                    } else {
                        return resolve();
                    }
                }
            );
        }
    );
};


exports.update = (newUser) => {
    //var salt = bcrypt.genSaltSync(10);
    //var newPassword = bcrypt.hashSync(newUser.password, salt); 
    //newUser.password = newPassword;
    console.log(newUser);
    return new Promise((resolve, reject) => {
        user.replaceOne(
            {'_id': newUser._id},
            newUser
        )
        .exec()
        .then(users => {
            return resolve(users);
        })
        .catch(err => {
            return reject(err);
        });
    });
};
