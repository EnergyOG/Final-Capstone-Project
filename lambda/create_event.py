import json
import boto3
import uuid
from datetime import datetime
import os

ALLOWED_ORIGIN = os.environ.get("ALLOWED_ORIGIN", "*")
SNS_TOPIC_ARN = os.environ.get("SNS_TOPIC_ARN")

dynamodb = boto3.resource("dynamodb")
sns = boto3.client("sns")

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

    table.put_item(Item=event_item)

    sns.publish(
        TopicArn=SNS_TOPIC_ARN,
        Subject=f"{event_item['title']} created",
        Message=(
            f"Event '{event_item['title']}' has been created.\n\n"
            f"Description: {event_item['description']}\n"
            f"Date: {event_item['date']}\n"
            f"Time: {event_item['time']}\n"
            f"Location: {event_item['location']}"
        )
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