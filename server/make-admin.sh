#!/bin/bash

# ============================================
# CONFIGURATION - Change this username
# ============================================
USERNAME="admin"

# ============================================
# Script to grant admin role to a user
# ============================================

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Run the Node.js script with the username
node "${SCRIPT_DIR}/utils/makeAdmin.js" "$USERNAME"