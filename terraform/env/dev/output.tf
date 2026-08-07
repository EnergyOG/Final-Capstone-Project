output "api_gateway_url" {

  description = "API Gateway endpoint"

  value = module.api_gateway.api_url

}


output "lambda_functions" {

  description = "Lambda functions created"

  value = module.lambda.lambda_functions

}


output "dynamodb_tables" {

  description = "DynamoDB tables"

  value = module.dynamodb.tables

}