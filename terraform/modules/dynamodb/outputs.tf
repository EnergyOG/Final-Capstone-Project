output "table_name" {
  description = "Name of the events table."
  value       = aws_dynamodb_table.events.name
}

output "table_arn" {
  description = "ARN of the events table."
  value       = aws_dynamodb_table.events.arn
}

output "tables" {
  description = "Created DynamoDB tables."
  value = {
    events = {
      name = aws_dynamodb_table.events.name
      arn  = aws_dynamodb_table.events.arn
    }
  }
}
