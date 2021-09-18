
exports.list = collection => {
    return async (req, res) => {
        try {
            const found = await collection.find();

            res.send(found);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
