exports.getUsers = (req, res) => {
    res.send([
        {
            id: 0,
            name: 'Nathan'
        },
        {
            id: 1,
            name: 'Sjoerd'
        },
        {
            id: 2,
            name: 'Mark'
        },
        {
            id: 3,
            name: 'Tessa'
        }
      ]
    )
};

exports.registerUser = (req, res) => {};

exports.loginUser = (req, res) => {};