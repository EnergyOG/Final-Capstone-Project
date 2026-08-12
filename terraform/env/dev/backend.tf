terraform {
  backend "s3" {
    bucket       = "fcp-terraform-state-new"
    key          = "dev/terraform.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}