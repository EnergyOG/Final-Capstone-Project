import json
import boto3
import os

ALLOWED_ORIGIN = os.environ.get("ALLOWED_ORIGIN", "*")

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
        "headers": {
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,GET,POST,PUT,DELETE"
    },
        "body":json.dumps({
            "message":"Event deleted successfully"
        })
    }