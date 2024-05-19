import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import { readFile } from 'node:fs';
import { log } from 'node:console';
import inquirer from 'inquirer';
let a = true;

const arr=[];

const myfunction =async () => {
    const data = await inquirer.prompt([{
        type: 'input',
        name: 'student name',
        message: 'Enter Student name',
    
    },{type: 'input',
        name: 'Student Age',
        message: 'Enter Student age',
    }, {
        type: 'input',
        name: 'student city',
        message: 'Enter Student city name',},

       {  type: 'checkbox',
         name: 'Student subject',
        message: 'Enter Student subject',
        choices:["Mathes","Science","Sinhala","Tamil"],},


        {type: 'confirm',
        name: 'student fill',
        message: 'Enter Student filll',
        },]);

    // log(data);
    const {... datas}=data;
    arr.push(datas);
    if (!data.hasOtherValue) {
        a = false;
    }
};

const main = async () => {
    while (a) {
        await myfunction();

        log(arr);
    }
};

main();
