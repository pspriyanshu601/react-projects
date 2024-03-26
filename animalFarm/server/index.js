import express from "express";
import cors from "cors";
import Chance from "chance"


const app=express();

app.use(cors());
app.use(express.json());

const port =8080;

const chance=new Chance();
const animals=[...Array(250).keys()].map(id=>{
    return {
        id,
        type:chance.animal(),
        age:chance.age(),
        name:chance.name(),
    }
});

app.get("/",(req,res)=>{
    const q=req.query.q?.toLowerCase() ||'';
    const result =animals.filter(animal=>animal.type.toLowerCase().includes(q));

    res.send(result);

});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})