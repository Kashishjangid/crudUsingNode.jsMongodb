const dbConnect= require('./connection')

const deleteData= async()=>{
    const data = await dbConnect();
    const result = await data.deleteOne({name:'C51'});
    
    // console.log(result)
    if(result.acknowledged)
    {
        console.log(result)
    }
    else
    {
        console.log('Data is not deleted.')
    }
}

deleteData();