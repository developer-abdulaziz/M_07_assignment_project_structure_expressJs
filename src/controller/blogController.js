exports.create = async (req, res) => {
    res.status(200).json({status: "Create a blog post"});
};
exports.read = async (req, res) => {
    res.status(200).json({status: "Read all blog post"});
};
exports.delete = async (req, res) => {
    res.status(200).json({status: "Delete all delete post"});
};
exports.update = async (req, res) => {
    res.status(200).json({status: "Update all update post"});
};