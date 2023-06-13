import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument,DeleteCommand } from "@aws-sdk/lib-dynamodb";


const client = new  DynamoDBClient({});
const docClient = DynamoDBDocument.from(client);

const main = async() =>{
    const command =  new DeleteCommand({
        TableName:"Books",
        Key:{
            Author:"Antje Barth",
            Title:"Data Science on AWS"
        }
        
    })

    try{
        const response = await docClient.send(command);
        console.log(response)
        return response

    }catch(error){
        console.log(error)
    }
}

main()