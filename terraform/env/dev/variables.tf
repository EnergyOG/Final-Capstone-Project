variable "aws_region" {

  description = "AWS region"

  type = string

}


variable "environment" {

  description = "Deployment environment"

  type = string

}


variable "project_name" {

  description = "fcp"

  type = string

}


variable "lambda_runtime" {

  description = "Lambda runtime"

  type = string

}


variable "lambda_timeout" {

  description = "Lambda execution timeout"

  type = number

}


variable "lambda_memory" {

  description = "Lambda memory"

  type = number

}

variable "allowed_origin" {
  description = "Browser origin allowed to call the API. Use * only for development."
  type        = string
  default     = "*"
}
