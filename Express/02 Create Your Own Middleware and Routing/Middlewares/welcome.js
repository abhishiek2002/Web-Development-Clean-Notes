
const welcome = (req, res, next) => {
    req.user = "Abhishek Kuntal";
    next();
}

export default welcome;