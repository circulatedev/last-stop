resource "aws_dynamodb_table" "terraform_lock" {
  name           = "${var.name}_terraform_state"
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "LockID"
  attribute {
    name = "LockID"
    type = "S"
  }
  tags = {
    "Name" = "Last Stop TF State Lock Table"
  }
}