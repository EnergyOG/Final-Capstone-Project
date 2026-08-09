variable "project_name" { type = string }
variable "environment" { type = string }
variable "runtime" { type = string }
variable "timeout" { type = number }
variable "memory" { type = number }
variable "lambda_role_arn" { type = string }
variable "events_table_name" { type = string }
variable "sns_topic_arn" { type = string }
variable "source_directory" {
  description = "Absolute path to the Lambda Python source files."
  type        = string
}
variable "allowed_origin" {
  description = "Origin allowed by Lambda CORS headers."
  type        = string
  default     = "*"
}
