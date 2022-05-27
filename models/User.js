const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }, 
    thought:[
        {
            type: Schema.Types.ObjectId,
            ref:"Thought"
        }
        ],
    friends:[
        {
            type: Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    },
    {
        toJSON: {
          getters: true,
          virtuals: true,
        },
      }
    )

const User = model('user', userSchema);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
      });


module.exports = User;