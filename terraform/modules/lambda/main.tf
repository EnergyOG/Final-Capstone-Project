locals {

  functions = {

    create_event = {
      handler = "create_event.handler"
      path    = "${path.root}/../../../lambda/create_event/create_event.zip"
    }

    get_events = {
      handler = "get_events.handler"
      path    = "${path.root}/../../../lambda/get_events/get_events.zip"
    }

    update_event = {
      handler = "update_event.handler"
      path    = "${path.root}/../../../lambda/update_event/update_event.zip"
    }

    delete_event = {
      handler = "delete_event.handler"
      path    = "${path.root}/../../../lambda/delete_event/delete_event.zip"
    }

  }

}


resource "aws_lambda_function" "this" {

  for_each = local.functions


  function_name = "${var.project_name}-${each.key}-${var.environment}"


  filename = each.value.path


  source_code_hash = filebase64sha256(each.value.path)


  handler = each.value.handler


  runtime = var.runtime


  role = var.lambda_role_arn


  timeout = var.timeout


  memory_size = var.memory


  environment {

    variables = {

      ENVIRONMENT = var.environment

    }

  }


  tags = {

    Name        = "${var.project_name}-${each.key}"

    Environment = var.environment

  }

}