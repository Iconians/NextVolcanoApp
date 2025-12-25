#!/usr/bin/env node

/**
 * Script to generate JWT_PRIVATE_KEY and JWKS for Convex authentication
 *
 * Usage:
 *   1. Install jose: npm install jose
 *   2. Run: node scripts/generateJWTKeys.mjs
 *   3. Copy the output and set as Convex environment variables:
 *      npx convex env set JWT_PRIVATE_KEY "<private_key>"
 *      npx convex env set JWKS "<jwks>"
 */

import { exportJWK, exportPKCS8, generateKeyPair } from 'jose'

try {
  const keys = await generateKeyPair('RS256', {
    extractable: true
  })

  const privateKey = await exportPKCS8(keys.privateKey)
  const publicKey = await exportJWK(keys.publicKey)
  const jwks = JSON.stringify({ keys: [{ use: 'sig', ...publicKey }] })

  console.log('\n=== JWT Keys Generated ===\n')
  console.log('1. Set JWT_PRIVATE_KEY:')
  console.log(`   npx convex env set JWT_PRIVATE_KEY "${privateKey.trimEnd().replace(/\n/g, ' ')}"`)
  console.log('\n2. Set JWKS:')
  console.log(`   npx convex env set JWKS '${jwks}'`)
  console.log('\n=== Copy the commands above and run them ===\n')
} catch (error) {
  console.error('Error generating keys:', error)
  console.error('\nMake sure you have installed jose:')
  console.error('  npm install jose')
  process.exit(1)
}
