output "github_actions_oidc_role_arn" {
  description = "ARN of the IAM role trusted by GitHub Actions through OIDC."
  value       = module.github_actions_oidc.github_actions_role_arn
}

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

output "sns_topic_arn" {
  description = "ARN of the notification topic."
  value       = module.sns.topic_arn
}
