var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var cors = require('cors')
/* multer */
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

app.use(cors())
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send({msg: 'hello'})
})

app.post('/profile', upload.array(), function (req, res, next) {})

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})
