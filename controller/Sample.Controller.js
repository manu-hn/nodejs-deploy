

const getFunction = async (req, res, next)=>{
    try {
        res.status(200).json({error : false, message : "Hello Hi Bye"})
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getFunction
}