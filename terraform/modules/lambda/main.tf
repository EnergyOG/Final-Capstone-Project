data "archive_file" "functions" {
  for_each    = local.functions
  type        = "zip"
  source_file = each.value.source_file
  # Terraform init creates .terraform before data sources are evaluated, so this
  # keeps generated deployment artifacts outside the source modules.
  output_path = "${path.root}/.terraform/${each.key}.zip"
}

locals {
  functions = {
    create_event = { handler = "create_event.lambda_handler", source_file = "${var.source_directory}/create_event.py" }
    get_events   = { handler = "get_events.lambda_handler", source_file = "${var.source_directory}/get_events.py" }
    get_event    = { handler = "get_event.lambda_handler", source_file = "${var.source_directory}/get_event.py" }
    update_event = { handler = "update_event.lambda_handler", source_file = "${var.source_directory}/update_event.py" }
    delete_event = { handler = "delete_event.lambda_handler", source_file = "${var.source_directory}/delete_event.py" }
  }
}

resource "aws_lambda_function" "this" {
  for_each = local.functions

  function_name    = "${var.project_name}-${each.key}-${var.environment}"
  filename         = data.archive_file.functions[each.key].output_path
  source_code_hash = data.archive_file.functions[each.key].output_base64sha256
  handler          = each.value.handler
  runtime          = var.runtime
  role             = var.lambda_role_arn
  timeout          = var.timeout
  memory_size      = var.memory

  environment {
    variables = {
      ENVIRONMENT    = var.environment
      EVENTS_TABLE   = var.events_table_name
      SNS_TOPIC_ARN  = var.sns_topic_arn
      ALLOWED_ORIGIN = var.allowed_origin
    }
  }

  tags = {
    Name        = "${var.project_name}-${each.key}"
    Environment = var.environment
  }
}
