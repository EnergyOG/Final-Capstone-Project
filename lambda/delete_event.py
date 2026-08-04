import json
import boto3


dynamodb = boto3.resource("dynamodb")

table = dynamodb.Table("Events")


def lambda_handler(event, context):

    event_id = event["pathParameters"]["id"]


    table.delete_item(
        Key={
            "id":event_id
        }
    )


    return {
        "statusCode":200,
        "body":json.dumps({
            "message":"Event deleted successfully"
        })
    }