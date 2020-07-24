// include modules & set variables
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generateTrashTalk')
const Handlebars = require('handlebars')

// register helper
Handlebars.registerHelper('ifEqual', function (jobSelected, job, options) {
	if (jobSelected === job) {
		return options.fn(this)
	} else {
		return options.inverse(this)
	}
})

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
	const jobSelected = req.body.job
	console.log(req.body.job)
	const trashTalk = generateTrashTalk(jobSelected)
	res.render('index', { trashTalk, jobSelected })
})

// listen
app.listen(port, () => {
	console.log(`Express listening to http://localhost:${port}`)
})
