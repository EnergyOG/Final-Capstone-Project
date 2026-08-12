data "aws_caller_identity" "current" {}

locals {
  routes = {
    create_event = { method = "POST", path = "events" }
    get_events   = { method = "GET", path = "events" }
    get_event    = { method = "GET", path = "events/{id}" }
    update_event = { method = "PUT", path = "events/{id}" }
    delete_event = { method = "DELETE", path = "events/{id}" }
  }
}

resource "aws_apigatewayv2_api" "this" {
  name          = "${var.project_name}-${var.environment}-api"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = var.allowed_origins
    allow_methods = ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
    allow_headers = ["content-type"]
  }
}

resource "aws_apigatewayv2_integration" "lambda" {
  for_each = local.routes

  api_id                 = aws_apigatewayv2_api.this.id
  integration_type       = "AWS_PROXY"
  integration_uri        = var.lambda_functions[each.key].invoke_arn
  integration_method     = "POST"
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "lambda" {
  for_each = local.routes

  api_id    = aws_apigatewayv2_api.this.id
  route_key = "${each.value.method} /${each.value.path}"
  target    = "integrations/${aws_apigatewayv2_integration.lambda[each.key].id}"
}

resource "aws_apigatewayv2_stage" "default" {
  api_id      = aws_apigatewayv2_api.this.id
  name        = "$default"
  auto_deploy = true
}

resource "aws_lambda_permission" "api_gateway" {
  for_each = local.routes

  statement_id  = "AllowExecutionFromApiGateway-${each.key}"
  action        = "lambda:InvokeFunction"
  function_name = var.lambda_functions[each.key].name
  principal     = "apigateway.amazonaws.com"

  source_arn = "arn:aws:execute-api:${var.aws_region}:${data.aws_caller_identity.current.account_id}:${aws_apigatewayv2_api.this.id}/*/*"
}
