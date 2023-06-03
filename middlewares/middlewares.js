



const findUser = (req, res, next) => {
     console.log('user found');

     next();
}

module.exports = { findUser };