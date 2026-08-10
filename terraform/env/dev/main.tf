module "dynamodb" {
  source = "../../modules/dynamodb"

  project_name = var.project_name
  environment  = var.environment
}

module "sns" {
  source = "../../modules/sns"

  project_name = var.project_name
  environment  = var.environment
}

module "iam" {
  source = "../../modules/iam"

  project_name     = var.project_name
  environment      = var.environment
  events_table_arn = module.dynamodb.table_arn
  sns_topic_arn    = module.sns.topic_arn
}

module "lambda" {
  source = "../../modules/lambda"

  project_name      = var.project_name
  environment       = var.environment
  runtime           = var.lambda_runtime
  timeout           = var.lambda_timeout
  memory            = var.lambda_memory
  lambda_role_arn   = module.iam.lambda_role_arn
  events_table_name = module.dynamodb.table_name
  sns_topic_arn     = module.sns.topic_arn
  source_directory  = abspath("${path.root}/../../../lambda")
  allowed_origin    = var.allowed_origin
}

module "api_gateway" {
  source = "../../modules/api_gateway"

  project_name     = var.project_name
  environment      = var.environment
  allowed_origins  = [var.allowed_origin]
  lambda_functions = module.lambda.lambda_functions
}

module "cloudwatch" {
  source = "../../modules/cloudwatch"

  project_name     = var.project_name
  environment      = var.environment
  sns_topic_arn    = module.sns.topic_arn
  lambda_functions = module.lambda.lambda_functions
}
