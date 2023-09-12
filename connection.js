const {MongoClient}= require('mongodb')
const url ='mongodb+srv://kashishjangid:kashish04@cluster0.dmmqviq.mongodb.net/';
const client= new MongoClient(url);

const dbConnect=()=>{
    client.connect();
    const db = client.db('kashish');
    const collection= db.collection('nodejs');
    return collection;
}

module.exports=dbConnect;