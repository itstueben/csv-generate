#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { generate } from 'csv';

yargs(hideBin(process.argv))
  .command(
    'full',
    'generate csv file with full info',
    (yargs) => {
      return yargs.option('count', {
        alias: 'c',
        default: 10,
      });
    },
    (args) => {
      generate({
        columns: ['int', () => 'mydata'],
        length: args.count,
      }).pipe(process.stdout);
    },
  )
  .demandCommand(1)
  .help()
  .parse();
