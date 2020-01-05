#!/usr/bin/env node

// 1st party
const path = require('path');

// 3rd party pckgs
const { argv } = require('yargs');

async function main()
{
  const cmdFilePath = path.join(__dirname, 'commands', argv._[0]);

  let cmd = null;

  try
  {
    cmd = require(cmdFilePath);
  }
  catch (error)
  {
    console.log('[ERROR] Unkown command.', error);
  }

  if (cmd != null)
  {
    await cmd.execute(argv);
  }
}

main();