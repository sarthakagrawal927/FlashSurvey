module.exports = (req,res,next) => {
    if(!req.user) 
        return res.status(401).send({error: 'you log in'});

    next();
};