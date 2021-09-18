
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const { USERNAME, PASSWORD } = process.env;

        if (username === USERNAME && password === PASSWORD) {
            req.session.username = username;

            return res.send();
        }

        res.status(500).send('Wrong username or password');
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.logout = async (req, res) => {
    try {
        const { session } = req;

        session.destroy();

        res.send();
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.info = async (req, res) => {
    try {
        const { username } = req.session;

        res.send({ username });
    } catch (error) {
        res.status(500).send(error);
    }
}
