import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

const userSchema = new Schema({
  username:{type: String, trim:true},
  name:{type: String, trim:true},
  email:{type:String},
  password:{type: String}
})

userSchema.statics.authenticate = function(email, password, cb){
  User.findOne({email:email})
    .exec(function(err, user){
      if(err) {
        return cb(err)
      } else if (!user){
        var error = new Error('Utilisateur introuvable')
        error.status = 401;
        return cb(error)
      }
      bcrypt.compare(password, user.password, function(error, result){
        if(result === true){
          return cb(null, user)
        } else{
          return cb()
        }
      })
    })
}

// config bcrypt
userSchema.pre('save', function(next){ //voir doc node
  const user = this //  this = chaque instance du model
  bcrypt.hash(user.password, 10, function(error, hash){
    if(error)return next(error)
    user.password = hash
    next()
  })

})

const User = mongoose.model("User", userSchema)

export { User }
