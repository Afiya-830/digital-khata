import express from "express";
import route from "./routes/route.js";
import jsonRoute from "./routes/jsonRoute.js"

const app = express();

app.use("/", route);
app.use("/json",jsonRoute);

app.get('/owner', (req, res) =>{
res.json({ owner: "Ramesh kaka" });
});
app.get('/customer/suresh',(req,res) => {
    res.send('looking for customer suresh ');
});

app.get('/customers/:id', (req, res) => {
const customerId = req.params.id;
res.send(`Looking for Customer ID: ${customerId}`);
});

app.use(express.json());
app.post('/customers', (req, res) => {
    const newCustomer = req.body;
    console.log('New Customer:', newCustomer);
    res.status(201).json({ message: "customer saved!" , data: newCustomer });
});


app.listen(5001,()=>{
    console.log("🚀Counter Running at port 5001");
});
