module "iam" {

  source = "../../modules/iam"


  project_name = var.project_name

}


module "dynamodb" {

  source = "../../modules/dynamodb"


  project_name = var.project_name


}


module "lambda" {

  source = "../../modules/lambda"


  project_name = var.project_name


  environment = var.environment


  runtime = var.lambda_runtime


  timeout = var.lambda_timeout


  memory = var.lambda_memory


  lambda_role_arn = module.iam.lambda_role_arn


  depends_on = [

    module.dynamodb

  ]

}


module "api_gateway" {

  source = "../../modules/api_gateway"


  project_name = var.project_name


  environment = var.environment


  lambda_functions = module.lambda.lambda_functions


}


module "cloudwatch" {

  source = "../../modules/cloudwatch"


  project_name = var.project_name


  lambda_functions = module.lambda.lambda_functions


}


module "sns" {

  source = "../../modules/sns"


  project_name = var.project_name


}