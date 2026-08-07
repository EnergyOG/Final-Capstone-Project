variable "project_name" {
  description = "Name of the project"
  type        = string
}


variable "environment" {
  description = "Deployment environment"
  type        = string
}


variable "runtime" {
  description = "Lambda runtime"
  type        = string
}


variable "timeout" {
  description = "Lambda timeout in seconds"
  type        = number
}


variable "memory" {
  description = "Lambda memory in MB"
  type        = number
}


variable "lambda_role_arn" {
  description = "IAM role ARN used by Lambda"
  type        = string
}