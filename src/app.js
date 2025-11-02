const Express = require('express')

const app = Express()

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(3000, () => { console.log("Server is running on 3000") })