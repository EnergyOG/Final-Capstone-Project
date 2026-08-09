output "api_url" {
  description = "Base URL for the HTTP API."
  value       = aws_apigatewayv2_stage.default.invoke_url
}
