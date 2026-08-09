output "lambda_functions" {
  description = "Lambda function metadata, keyed by operation."
  value = {
    for name, function in aws_lambda_function.this : name => {
      arn        = function.arn
      name       = function.function_name
      invoke_arn = function.invoke_arn
    }
  }
}
