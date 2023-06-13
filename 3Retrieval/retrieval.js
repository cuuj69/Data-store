import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const main = async() =>{
    const command =  new GetCommand({
        TableName:"Books",
        Key:{
            Title: "Data Science on AWS",
            Author: "Antje Barth"

        }
        
    })

    try{
        const response = await docClient.send(command);
        console.log(response);
        return response
    }catch (error){
        console.log(error)

    }
}

main()