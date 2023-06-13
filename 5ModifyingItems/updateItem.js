import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const docClient = DynamoDBDocument.from(client)

export const main =  async() => {
    const command = new UpdateCommand({
        TableName:"Books",
        Key:{Author:"Antje Barth",
        Title:"Data Science on AWS"},
        UpdateExpression:"SET Formats.Audiobook=:newVal",
        ExpressionAttributeValues:{
            ":newVal":"JCV5555"
        },
        ReturnValues:"ALL_NEW"   
    })

    
    try{
        const response = await docClient.send(command)
        console.log(response)
        return response


    }catch(error){
        console.log(error)
    }
}

main()