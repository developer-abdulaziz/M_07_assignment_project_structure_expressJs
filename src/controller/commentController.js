
exports.create = async (req, res) => {
    res.status(200).json({status: "Create a comment post"});
};
exports.read = async (req, res) => {
    res.status(200).json({status: "Read all comment post"});
};
exports.delete = async (req, res) => {
    res.status(200).json({status: "Delete all comment post"});
};
exports.update = async (req, res) => {
    res.status(200).json({status: "Update all comment post"});
};