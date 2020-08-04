const bcrypt = require("bcryptjs")
const mongoose = require('mongoose');

const { routeErrorHandler } = require("../utils/errorHandler");

const AdminUserSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: String,
  authToken: String,
  authTokenExpiresTimestamp: Number
}, {collection: 'admin-user'});

// Saves the user"s password hashed (plain text password storage is not good)
AdminUserSchema.pre("save", function (next) {
  const user = this
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err)
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err)
        }
        user.password = hash
        next()
      })
    })
  } else {
    return next()
  }
})


AdminUserSchema.methods.comparePassword = (typedPassword, dataBasePassword, callback) => {
  bcrypt.compare(typedPassword, dataBasePassword, (error, isMatch) => {
    if (error) {
      return routeErrorHandler('no password match', error);
    }
    callback(null, isMatch)
  })
}

module.exports = mongoose.model("AdminUser", AdminUserSchema);
