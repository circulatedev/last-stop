data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

# Use tfvars to determine whether or not to generate a VPC
module "vpc" {
  count = var.create_vpc == true ? 1 : 0

  source = "./modules/vpc"
  name     = var.name
}
