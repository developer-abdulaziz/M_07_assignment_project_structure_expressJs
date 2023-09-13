
exports.create = async (req, res) => {
    res.status(200).json({status: "success", data: "Create a message"});
};


exports.read = async (req, res) => {
    res.status(200).json({status: "success", data: "Read all message post"});
}


exports.delete = async (req, res) => {
    res.status(200).json({status: "success", data: "Delete a message post"});
}


exports.update = async (req, res) => {
    res.status(200).json({status: "success", data: "Update a message post"});
}