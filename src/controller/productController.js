
exports.create = async (req, res) => {
    res.status(200).json({status: "success", data: "Create a product"});
};


exports.read = async (req, res) => {
    res.status(200).json({status: "success", data: "Read all product post"});
}


exports.delete = async (req, res) => {
    res.status(200).json({status: "success", data: "Delete a product post"});
}


exports.update = async (req, res) => {
    res.status(200).json({status: "success", data: "Update a product post"});
}