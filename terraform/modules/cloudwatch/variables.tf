variable "project_name" {
  description = "Name of the project."
  type        = string
}

variable "environment" {
  description = "Deployment environment."
  type        = string
}

variable "sns_topic_arn" {
  description = "ARN of the SNS topic that receives alarm notifications."
  type        = string
}

variable "lambda_functions" {
  description = "Lambda function metadata, keyed by operation."
  type = map(object({
    arn        = string
    name       = string
    invoke_arn = string
  }))
}
