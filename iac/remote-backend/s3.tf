resource "random_string" "random" {
  length = 8
  lower = true
  special = false
  numeric = false
  upper = false
}

resource "aws_s3_bucket" "state_bucket" {
  bucket              = "${var.name}-terraform-state-backend-${random_string.random.result}"
  object_lock_enabled = true
  tags = {
    Name = "Last Stop S3 Remote Terraform State Store"
  }
}

resource "aws_s3_bucket_public_access_block" "bucket_public_access" {
  bucket = aws_s3_bucket.state_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_server_side_encryption_configuration" "bucket_encryption" {
  bucket = aws_s3_bucket.state_bucket.bucket

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_versioning" "bucket_versioning" {
  bucket = aws_s3_bucket.state_bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}
