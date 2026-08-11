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
