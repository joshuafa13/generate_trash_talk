// include modules & set variables
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generateTrashTalk')

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set body parser
app.use(bodyParser.urlencoded({ extended: true }))

// set router
app.get('/', (req, res) => {
	res.render('index')
})

app.post('/', (req, res) => {
	const options = req.body
	const trashTalk = generateTrashTalk(options)
	res.render('index', { trashTalk, options })
})

// listen
app.listen(port, () => {
	console.log(`Express listening to http://localhost:${port}`)
})
