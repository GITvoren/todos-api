



const findUser = async (req, res, next) => {
     const user = await User.findOne({username: req.body.username})

     req.user = user
     next();
}

module.exports = { findUser };