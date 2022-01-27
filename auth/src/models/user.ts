import mongoose from 'mongoose';

// An interface that describes the params for a new user
interface UserAttrs {
    email: string;
    password: string;
}

// Interface that describes the properties
// that a user model has
interface UserModel extends mongoose.Model<any> {
    build(attrs: UserAttrs): any;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
}

const User = mongoose.model<any, UserModel>('User', userSchema);

User.build({
    email: 'test@test.com',
    password: 'password'
})

export { User };