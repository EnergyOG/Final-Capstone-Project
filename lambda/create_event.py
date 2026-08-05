import json
import boto3
import uuid
from datetime import datetime
import os

ALLOWED_ORIGIN = os.environ.get("ALLOWED_ORIGIN", "*")

dynamodb = boto3.resource("dynamodb")

table = dynamodb.Table("Events")


def lambda_handler(event, context):

    body = json.loads(event["body"])

    event_item = {
        "id": str(uuid.uuid4()),
        "title": body["title"],
        "description": body["description"],
        "date": body["date"],
        "time": body["time"],
        "location": body["location"],
        "createdAt": datetime.utcnow().isoformat()
    }


    table.put_item(
        Item=event_item
    )


    return {
        "statusCode": 201,
        "headers": {
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,GET,POST,PUT,DELETE"
    },
        "body": json.dumps({
            "message": "Event created successfully",
            "event": event_item
        })
    }