variable "aws_region" {
  description = "The AWS region to deploy resources in"
  type        = string
  default     = "eu-west-3"
}

variable "domain_name" {
  description = "The primary domain name for the portfolio"
  type        = string
  default     = "barthez-kenwou.com"
}

variable "tags" {
  description = "Common tags for all resources"
  type        = map(string)
  default = {
    Project     = "Portfolio"
    Owner       = "Barthez Kenwou"
    Environment = "production"
    ManagedBy   = "Terraform"
  }
}
