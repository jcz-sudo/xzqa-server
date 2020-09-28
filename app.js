const express = require('express')
const server = express()
const cors = require('cors')

server.use(
	cors({
		origin: ['http://127.0.0.2:8080', 'http://localhost:8080'],
	})
)

server.get('/category', (req, res) => {
	res.send('OK')
})

server.listen(3000, function () {
	console.log('服务器启动')
})
