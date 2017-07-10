const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.redirect('views/webskjema2.html')
})

app.listen(process.env.PORT || 5000);
app.use(express.static(__dirname));