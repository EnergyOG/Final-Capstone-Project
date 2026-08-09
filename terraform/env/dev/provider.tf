provider "aws" {
  region = var.aws_region

  # Keep `terraform validate` usable in local development and pull-request CI
  # without AWS credentials. Terraform plan/apply still authenticate for every
  # AWS API operation and fail if valid deployment credentials are not present.
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
}
