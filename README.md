# Azure App CI/CD Project

## Overview
This project demonstrates deploying a Node.js application to Azure App Service using a CI/CD pipeline with GitHub Actions. It includes automated deployment, application monitoring, and secure secret management using Azure-native services.

## Architecture
- Node.js + Express application
- Azure App Service (Linux)
- GitHub Actions CI/CD pipeline
- Azure Application Insights (monitoring)
- Azure Key Vault (secrets management)

## Technologies Used
- Node.js
- Express.js
- npm
- Git & GitHub
- GitHub Actions
- Azure App Service
- Azure CLI
- Azure Application Insights
- Azure Key Vault

## Features
- Automated deployment on push to main branch
- Cloud-hosted web application
- CI/CD pipeline using GitHub Actions
- Application monitoring with Azure Application Insights
- Secure secret retrieval using Azure Key Vault and Managed Identity

## How It Works
1. Developer pushes code to GitHub
2. GitHub Actions workflow is triggered
3. Pipeline installs dependencies and prepares deployment package
4. Application is deployed to Azure App Service
5. App retrieves secrets securely from Azure Key Vault
6. Application Insights collects telemetry (requests, performance, logs)

## Security (Key Vault Integration)
This application uses Azure Key Vault to securely store and retrieve secrets. Managed Identity is used to authenticate the application without storing credentials in code.

## Monitoring
Azure Application Insights is integrated to provide real-time monitoring, including request tracking, performance metrics, and failure analysis.

## CI/CD
GitHub Actions is used to automatically build and deploy the application to Azure App Service on every push to the main branch.

## Learning Outcomes
- Built CI/CD pipeline for cloud deployment
- Deployed Node.js application to Azure App Service
- Implemented secure authentication using Managed Identity
- Integrated Azure Key Vault for secret management
- Configured Application Insights for monitoring and telemetry
- Troubleshot real-world cloud deployment and authentication issues