aws_region = "us-east-1"


environment = "dev"


project_name = "event-management-platform"


lambda_runtime = "python3.12"


lambda_timeout = 10


lambda_memory = 256

# Restrict this to the deployed frontend's URL outside local development.
allowed_origin = "http://localhost:5173"
