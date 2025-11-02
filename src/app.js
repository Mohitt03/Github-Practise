const Express = require('express')

const app = Express()

app.get('/', (req, res) => {
    res.send('This is first branch')
})

app.listen(3000, () => { console.log("Server is running on 3000") })