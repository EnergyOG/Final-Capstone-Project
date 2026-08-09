output "alarm_arns" {
  value = { for name, alarm in aws_cloudwatch_metric_alarm.lambda_errors : name => alarm.arn }
}
