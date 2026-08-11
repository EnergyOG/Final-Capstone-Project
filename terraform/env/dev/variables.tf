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

variable "github_repository" {
  description = "GitHub repository in the form owner/repo."
  type        = string
}

variable "github_owner" {
  description = "GitHub repository owner."
  type        = string
}

variable "github_owner_id" {
  description = "GitHub repository owner ID."
  type        = string
}

variable "github_repository_name" {
  description = "GitHub repository name."
  type        = string
}

variable "github_repository_id" {
  description = "GitHub repository ID."
  type        = string
}

variable "github_environment" {
  description = "GitHub Actions environment name."
  type        = string
}
