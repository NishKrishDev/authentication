import jwt from 'jsonwebtoken';

export const checkServer = (req, res) => {
    try {
        res.status(200).json({
            status: 200,
            message: 'Server is running on http://localhost:8080'
        })
    } catch (error) {
        console.log('Error while running server', error);
        res.status(500).json({
            status: 500,
            message: 'Server not working',
            error: error.message
        })
    }
}

const users = [
    { id: 1, username: 'Rao', password: '1288' }
];

const SECRET_KEY = 'VEER BHOGYA VASUNDHRA';

export const login = (req, res) => {
    try {
        console.log(req.body)
        const { username, password } = req.body;

        const checkUser = users.find((user) => user.username === username && user.password === password);
        if (!checkUser) return res.status(401).json({
            status: 401,
            message: 'Invalid credentails'
        })

        const token = jwt.sign({
            userId: checkUser.id,
            username: checkServer.username
        },
            SECRET_KEY,
            {
                expiresIn: '1h'
            }
        )

        res.status(200).json({
            status: 200,
            message: 'Valid Credentials',
            token: token
        })


    } catch (error) {
        console.log('Error while checking username and password', error);
        res.status(401).json({
            status: 401,
            message: 'Error while checking username and password',
            error: error.message
        })
    }
}

