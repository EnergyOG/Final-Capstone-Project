variable "project_name" {
  description = "Name of the project."
  type        = string
}

variable "environment" {
  description = "Deployment environment."
  type        = string
}

variable "events_table_arn" {
  description = "ARN of the DynamoDB events table."
  type        = string
}

variable "sns_topic_arn" {
  description = "ARN of the SNS notification topic."
  type        = string
}
