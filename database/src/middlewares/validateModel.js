module.exports = (req, res, next) => {
    const { model } = req.params;

    if (["Character", "Film", "Planet"].includes(model)) {
        return next();
    }
    else {
        console.log("Invalid ModelS");
    }
};