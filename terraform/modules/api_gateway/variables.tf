variable "project_name" {
  description = "Name of the project"
  type        = string
}

variable "aws_region" {
  description = "AWS region for deployment"
  type        = string
}

variable "environment" {
  description = "Deployment environment"
  type        = string
}

variable "allowed_origins" {
  description = "Allowed origins for API Gateway CORS"
  type        = list(string)
}

variable "lambda_functions" {
  description = "Lambda functions used by API Gateway"

  type = map(object({
    name       = string
    arn        = string
    invoke_arn = string
  }))
}