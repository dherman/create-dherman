#!/usr/bin/env node

console.error("👋 create-dherman");
console.error();

console.error("📋 command-line arguments:");
console.error(process.argv);
console.error();

console.error("🌎 npm environment variables:");
for (const key of Object.keys(process.env)) {
  if (key.startsWith('npm_') || key.startsWith('NPM_')) {
    console.error(`${key}=${process.env[key]}`);
  }
}
