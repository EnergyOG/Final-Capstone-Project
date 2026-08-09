import json
import boto3
import os

ALLOWED_ORIGIN = os.environ.get("ALLOWED_ORIGIN", "*")

dynamodb = boto3.resource("dynamodb")

table = dynamodb.Table(os.environ["EVENTS_TABLE"])


def lambda_handler(event, context):

    response = table.scan()

    events = response["Items"]


    return {
        "statusCode": 200,
        "headers": {
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,GET,POST,PUT,DELETE"
    },
        "body": json.dumps(events)
    }
