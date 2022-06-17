const app=require('express')()
const server=require('http').createServer(app)
const mongoose=require('mongoose')
const DB='mongodb+srv://arbaazahmadcluster:arbaaz@database123@cluster0.u3gtm.mongodb.net/chataa?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=>{
    console.log('connection created')
}).catch((err)=>{
    console.log('some error occured '+err)
})

const io=require('socket.io')(server,{
    cors:{
        origin:'*'
    }
})

io.on("connection",(socket)=>{
    socket.on("mychat",(payload)=>{
        io.emit("chat",payload)
    })

})
server.listen(5080,()=>{
    console.log('the server is started at port no. 5080..')
})