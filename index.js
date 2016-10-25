import app from './app'

app.listen(app.get('port'), () => {
    console.log(`escutando na porta: ${app.get('port')}`)
})
