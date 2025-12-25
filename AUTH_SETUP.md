# Convex Authentication Setup

This guide will help you set up Convex authentication for the Volcano Trivia App.

## Required Environment Variables

Convex auth requires two environment variables to be set:
- `JWT_PRIVATE_KEY` - Private key for signing JWT tokens
- `JWKS` - JSON Web Key Set for token verification

## Setup Steps

### 1. Install Dependencies

Make sure you have the required package installed:

```bash
npm install
```

### 2. Generate JWT Keys

Run the key generation script:

```bash
node scripts/generateJWTKeys.mjs
```

This will output two commands that you need to run. Copy and paste each command to set the environment variables in Convex.

### 3. Set Environment Variables in Convex

The script will output commands like:

```bash
npx convex env set JWT_PRIVATE_KEY "<private_key>"
npx convex env set JWKS '<jwks>'
```

Run both commands in your terminal.

### 4. Verify Setup

List your environment variables to confirm they're set:

```bash
npx convex env list
```

You should see both `JWT_PRIVATE_KEY` and `JWKS` in the list.

### 5. Test Authentication

1. Start your development server: `npm run dev`
2. Start Convex dev: `npx convex dev` (in another terminal)
3. Try creating an account or signing in

## Troubleshooting

### Error: "Missing environment variable JWT_PRIVATE_KEY"

- Make sure you've run both `npx convex env set` commands
- Verify the variables are set: `npx convex env list`
- Restart your Convex dev server after setting the variables

### Error: "Authentication is not properly configured"

- Double-check that both `JWT_PRIVATE_KEY` and `JWKS` are set
- Ensure there are no extra quotes or spaces when setting the variables
- The private key should be on a single line (spaces instead of newlines)

### Error: "InvalidAccountId"

- This usually means the account doesn't exist
- Try creating a new account first
- If the account was created with the old localStorage system, you'll need to create a new account

## Manual Key Generation (Alternative)

If the script doesn't work, you can generate keys manually:

1. Install jose: `npm install jose`
2. Create a temporary script:

```javascript
import { exportJWK, exportPKCS8, generateKeyPair } from 'jose'

const keys = await generateKeyPair('RS256', { extractable: true })
const privateKey = await exportPKCS8(keys.privateKey)
const publicKey = await exportJWK(keys.publicKey)
const jwks = JSON.stringify({ keys: [{ use: 'sig', ...publicKey }] })

console.log('JWT_PRIVATE_KEY:', privateKey.trimEnd().replace(/\n/g, ' '))
console.log('JWKS:', jwks)
```

3. Run the script and copy the output values
4. Set them using `npx convex env set`





