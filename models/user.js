const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/database");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  accountType: {
    type: String
  },
  listings: []
});

const User = module.exports = mongoose.model("EcommUser", userSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByEmail = function(email, callback){
  const query = {email: email}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

// module.exports.deleteUser = function(user, callback){
//   User.getUserByEmail(user.email, (err, res) => {
//     if(err) throw err;
//     company.findOneAndUpdate(
//        { companyLegalName : user.companyLegalName },
//        { $pull: { employees : user.email } },
//        (err, res) => {
//          if(err) throw err;
//        }
//     );
//     User.remove({_id: res._id}, callback);
//   });
// }

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) =>{
    if(err) throw err;
    callback(null, isMatch);
  });
}
