const express=require('express');
const app=express();
const port =5000

app.get('/assistant/greet',(req,res)=>{
    const name=req.query.name;
   const date = new Date().getDay();
   const dayMessage = ["Have a wonderful day!","Happy Monday!Start your week with a smile!","Have a wonderful day!","Have a wonderful day!","Have a wonderful day!","It's Friday! The weekend is near!","Have a wonderful day!"];

    res.send({
        "welcomeMessage" :`Hello! ${name} I am your assistant. How can I help you today?`,
        "dayMessage": dayMessage[date]
    })
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
