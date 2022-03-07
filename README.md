## Install
```bash
npm install
```

## Generate Database Tables
```bash
npx prisma migrate dev
```

## Setup AWS Credentials
```bash
serverless config credentials --provider aws --key <AWS_CLIENT_KEY>  --secret <AWS_CLIENT_SECRET>
```

## Run Locally
```bash
serverless offline
```

## Deploy to AWS
```bash
serverless deploy
```

