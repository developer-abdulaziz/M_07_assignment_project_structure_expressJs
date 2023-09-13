
exports.create = async (req, res) => {
    res.status(200).json({status: "success", data: "Create a portfolio"});
};


exports.read = async (req, res) => {
    res.status(200).json({status: "success", data: "Read all portfolio post"});
}


exports.delete = async (req, res) => {
    res.status(200).json({status: "success", data: "Delete a portfolio post"});
}


exports.update = async (req, res) => {
    res.status(200).json({status: "success", data: "Update a portfolio post"});
}