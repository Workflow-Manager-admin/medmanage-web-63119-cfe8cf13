#!/bin/bash
cd /home/kavia/workspace/code-generation/medmanage-web-63119-cfe8cf13/frontend_doctor_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

