# =============================================================================
# AWS Infrastructure for Barthez Kenwou Portfolio
# =============================================================================

terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Replace with your backend configuration (S3/DynamoDB)
  # backend "s3" {}
}

provider "aws" {
  region = var.aws_region
}

# Provider for CloudFront (must be us-east-1 for ACM certificates)
provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
}

# Modular static site hosting (S3 + CloudFront + ACM)
# module "static_site" {
#   source = "./modules/static-site"
#
#   domain_name = var.domain_name
#   site_name   = "barthez-portfolio"
#   tags        = var.tags
#
#   providers = {
#     aws.us-east-1 = aws.us-east-1
#   }
# }
