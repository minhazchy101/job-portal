const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT ||3000 ;
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
app.use(cors())
app.use(express.json())



const uri = process.env.DB_URL ;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
   const jobCollection = client.db('the-portal').collection('jobs') ;

   //JOB API
    app.get("/thePathTwo", (req, res)=>{
      res.send("Hello server")
    })
   app.get('/jobs', async(req, res)=>{
    const jobs = jobCollection.find()
    const result = await jobs.toArray()
    res.send(result)
   }) 
   


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/thePathOne", (req, res)=>{
      res.send("Hello server")
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
