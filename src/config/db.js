import { MongoClient, ServerApiVersion } from 'mongodb'
import dotenv from 'dotenv'
import e from 'express'

dotenv.config()

const uri = process.env.DATABASE_URL
const dbName = process.env.DATABASE_NAME

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;
export const connectDb=async()=>{
    try{

        await client.connect()
        db=client.db(dbName)

        console.log("You successfully connected to MongoDB!")
        return db;

    }catch(error){
        console.log(error.message)
        process.exit(1)

    }
    
}
