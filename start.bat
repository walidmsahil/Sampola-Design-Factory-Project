@echo off
cd my-strapi-project
echo Starting Strapi...
start cmd /k "npm run develop"

cd ../sampola
echo Starting Next.js...
start cmd /k "npm run dev"
