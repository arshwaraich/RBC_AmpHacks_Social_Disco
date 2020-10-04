//Controller for authentication and authorization

var path = require('path');
var mongoose = require('mongoose');
const user = mongoose.model('users');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

exports.login = (username, password) => {
    return new Promise(
        (resolve, reject) => {
            user.findOne(
                {
                    'userName': username
                },
                (err, item) => {
                    if (err) {
                        console.log('error during search' + err);
                        return reject(
                            {
                                success: false
                            }
                        );
                    } else if (item) {
                        let isPasswordMatch = bcrypt.compareSync(password, item.password);
                        console.log(isPasswordMatch);
                        if (isPasswordMatch){
                            let token = jwt.sign(
                                {username: username},
                                'Rw%aYpOZ6Axedtlj@0!1A20661S$R$E3Ado4kGjs9RXipV&KlY'
                            );
                            return resolve({
                                'userId': item._id,
                                'success': true,
                                'token': token
                            });
                        } else {
                            return reject({
                                success: false
                            });
                        }
                    }
                }
            )
        }
    )
};

exports.register = (newUser) => {
    var salt = bcrypt.genSaltSync(10);
    var newPassword = bcrypt.hashSync(newUser.password, salt); 
    newUser.password = newPassword;
    return new Promise(
        (resolve, reject) => {
            console.log(newUser);
            user.create(
                newUser,
                (error, item) => {
                    console.log(error);
                    console.log(item);
                    if (error) {
                        return reject(error.message);
                    } else {
                        return resolve(item);
                    }
                }
            );
        }
    );
};
