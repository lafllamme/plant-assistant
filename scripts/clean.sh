#!/bin/bash

# Function to print timestamped messages with colors
log() {
  local COLOR=$1
  local MESSAGE=$2
  local TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
  echo -e "\033[1;${COLOR}m[$TIMESTAMP]\033[0m \033[1;${COLOR}m$MESSAGE\033[0m"
}

log 36 "🚀 Starting node_modules cleanup..."

# Remove root-level node_modules
if [ -d "node_modules" ]; then
  rm -rf node_modules
  log 32 "✅ Removed root node_modules"
else
  log 33 "⚠️ No root node_modules found"
fi

# Remove node_modules in packages
FOUND=false
for dir in packages/*/node_modules; do
  if [ -d "$dir" ]; then
    rm -rf "$dir"
    log 34 "🗑️ Removed $dir"
    FOUND=true
  fi
done

# Remove node_modules in apps/app-name/node_modules
for dir in apps/*/node_modules; do
  if [ -d "$dir" ]; then
    rm -rf "$dir"
    log 34 "🗑️ Removed $dir"
    FOUND=true
  fi
done

if [ "$FOUND" = false ]; then
  log 33 "⚠️ No package node_modules found"
fi

log 36 "✅ Cleanup complete."
