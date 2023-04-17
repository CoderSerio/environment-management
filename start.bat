start cmd /k "npm run start-fe"
start cmd /k "npm run start-bff"

@REM  npx nodemon -e ts --exec ts-node src/bff/index.ts