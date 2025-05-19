export const checkServer = (req, res) => {
    try {
        res.status(200).json({
            status : 200,
            message : 'Server is running on http://localhost:8080'
        })
    } catch (error) {
        console.log('Error while running server', error);
        res.status(500).json({
            status : 500,
            message : 'Server not working',
            error : error.message
        })
    }
}