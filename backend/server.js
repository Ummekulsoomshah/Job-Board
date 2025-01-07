const http=require('http');
const fs=require('fs')
const path=require('path')
const app=require('./app')
const server = http.createServer(app);

const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}
server.listen(3000);