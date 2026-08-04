import json
import boto3


dynamodb = boto3.resource("dynamodb")

table = dynamodb.Table("Events")


def lambda_handler(event, context):

    event_id = event["pathParameters"]["id"]

    body = json.loads(event["body"])


    table.update_item(
        Key={
            "id": event_id
        },

        UpdateExpression="""
        SET title=:title,
            description=:description,
            #date=:date,
            #time=:time,
            location=:location
        """,

        ExpressionAttributeNames={
            "#date":"date",
            "#time":"time"
        },

        ExpressionAttributeValues={
            ":title":body["title"],
            ":description":body["description"],
            ":date":body["date"],
            ":time":body["time"],
            ":location":body["location"]
        }
    )


    return {
        "statusCode":200,
        "body":json.dumps({
            "message":"Event updated successfully"
        })
    }