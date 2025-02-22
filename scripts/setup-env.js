const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function setupEnv() {
  const rootDir = path.join(__dirname, '..');
  const examplePath = path.join(rootDir, '.env.example');
  const envPath = path.join(rootDir, '.env');

  // Check if .env.example exists
  if (!fs.existsSync(examplePath)) {
    console.error('.env.example file not found!');
    process.exit(1);
  }

  // Check if .env already exists
  if (fs.existsSync(envPath)) {
    const overwrite = await question('.env file already exists. Overwrite? (y/N): ');
    if (overwrite.toLowerCase() !== 'y') {
      console.log('Setup cancelled.');
      process.exit(0);
    }
  }

  // Read .env.example
  const exampleContent = fs.readFileSync(examplePath, 'utf8');
  const variables = exampleContent.split('\n').filter(line => line.trim() && !line.startsWith('#'));
  
  let envContent = '';

  // Process each variable
  for (const variable of variables) {
    const [key, defaultValue] = variable.split('=').map(part => part.trim());
    const value = await question(`Enter value for ${key}${defaultValue ? ` (default: ${defaultValue})` : ''}: `);
    envContent += `${key}=${value || defaultValue || ''}\n`;
  }

  // Write to .env file
  fs.writeFileSync(envPath, envContent.trim());
  console.log('\n.env file has been created successfully!');
  rl.close();
}

setupEnv().catch(console.error);
