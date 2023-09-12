const dbConnect = require('./connection')

const main = async()=>{
    const data = await dbConnect();
    const database= await data.find({}).toArray();
    console.log(database);
}

main();