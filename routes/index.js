export default app => {
    app.route('/')
        .get((req, res) => {
            res.json({ msg: 'Bem vindo ao NodeJS' })
        })
}
