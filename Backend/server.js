const app = require('./App')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT || 8989

app.listen(PORT, () => console.log('server runnig on http://localhost:' + PORT))

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('connected to db'))
.catch(err => console.log(err.message)) 