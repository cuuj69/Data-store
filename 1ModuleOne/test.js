import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";

const client =  new DynamoDBClient({})

export const main = async() =>{
    const command =  new CreateTableCommand({
        TableName:"Books",
        AttributeDefinitions:[{
            AttributeName:"Title",
            AttributeType:"S"

        },{
            AttributeName:"Author",
            AttributeType:"S"
        }],
        KeySchema:[
            {
                AttributeName:"Title",
                KeyType:"HASH",
                
                
            },
            {
                AttributeName:"Author",
                KeyType:"RANGE"
            }
        ],
        ProvisionedThroughput:{
            ReadCapacityUnits:1,
            WriteCapacityUnits:1
        }
    })

    try{
        const response =  await client.send(command);
        console.log(response)
        return response

    }catch (error){
        console.log(error)
    }
}


main()