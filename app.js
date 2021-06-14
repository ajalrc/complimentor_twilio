import express from 'express'
import twilio from 'twilio'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()

const TWILIO_NUMBER=process.env.TWILIO_NUMBER
const TWILIO_AUTH_TOKEN=process.env.TWILIO_AUTH_TOKEN
const TWILIO_ACCOUNT_SID=process.env.TWILIO_ACCOUNT_SID

const app=express()
app.use(bodyParser.json())
const client=new twilio(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN);
app.use(express.static('public'))

app.get('/getcompliment',async(req,res)=>{
    const compliments=await client.messages.list({limit:5})
    const messages=compliments.map(message=>message.body)
    res.json(messages)
})

app.post('/postcompliment',async (req,res)=>{
    const to=req.body.to;
    const sender=req.body.sender;
    const receiver=req.body.receiver;
    const compliment=req.body.compliment;

    await client.messages.create({
        body:`${sender} says ${receiver} is ${compliment}`,
        from:TWILIO_NUMBER,
        to:to
    })
    res.json({success:true})
})

const PORT= process.env.PORT || 5000;
app.listen(PORT,console.log(`Listening to ${PORT}`))
