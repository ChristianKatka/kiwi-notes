#!/usr/bin/env bash

# stops the execution of a script if a command has an error
set -e 

STACK_NAME="kiwi-notes-dynamodb-notes-table"
TEMPLATE_FILE="./IaC/kiwi-notes-dynamodb-notes-table.yaml"
REGION="eu-west-1"

aws cloudformation deploy \
  --stack-name "$STACK_NAME"  \
  --template-file "${TEMPLATE_FILE}" \
  --region "$REGION"
