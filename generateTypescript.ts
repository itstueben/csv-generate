#!/usr/bin/env ts-node
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import {generate, stringify} from 'csv';

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
            // @ts-ignore
            generate({
                columns: ['int', () => 'mydata'],
                objectMode: true,
                length: args.count,
            })
                .pipe(stringify({
                    quoted: true
                }))
                .pipe(process.stdout);
        },
    )
    .demandCommand(1)
    .help()
    .parse();
