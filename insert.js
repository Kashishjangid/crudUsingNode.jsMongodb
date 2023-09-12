const dbConnect= require('./connection');

const insert= async()=>{
    const db= await dbConnect();
    const result = await db.insertOne(
        {name:'C51',brand:'Realme',price:9000,category:'Mobile'}
    )
    if(result.acknowledged)
    {
        console.log("Data is inserted")
    }
    else
    {
        console.log("Data not inserted")
    }
}

insert();