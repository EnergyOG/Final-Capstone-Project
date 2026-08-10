variable "project_name" {
  description = "Base project name to use in the IAM role and resource naming."
  type        = string
}

variable "environment" {
  description = "Deployment environment name."
  type        = string
}

variable "github_repository" {
  description = "GitHub repository in the form owner/repo."
  type        = string
}

variable "github_environment" {
  description = "The GitHub Actions environment name, e.g. development."
  type        = string
}
