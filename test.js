//DELETE//TESTING ONLY
import { createEmployee } from "create.js";

async function main()
{
    const {MongoClient} = require('mongodb');
    const client = new MongoClient('mongodb+srv://giba:<saGEpapnHmZYzaDw>@cluster0.zog7p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

    try{
        //connect to db
        await client.connect();
        //
        createEmployee(); 
        await listDatabases(client);


    } catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}
main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}


