output "github_actions_role_arn" {
  description = "ARN of the GitHub Actions OIDC deploy role."
  value       = aws_iam_role.github_actions_deploy.arn
}

output "openid_connect_provider_arn" {
  description = "ARN of the GitHub OIDC provider in AWS."
  value       = aws_iam_openid_connect_provider.github_actions.arn
}
