const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            },
        ]
    }
];


const inquirerMenu = async () => {

    console.clear();
    console.log('============================'.green);
    console.log('   Seleccione una opción: '.white);
    console.log('============================\n'.green);

    const { option } = await inquirer.prompt(menuOpts);

    return option;
}

const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'intro'.green} para continuar.`
        }
    ];

    await inquirer.prompt(question);
}

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                let resp;
                value.length === 0 ? resp = 'Por favor, ingrese algún valor.' : resp = true;
                return resp;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const tasksListDelete = async (tasks = []) => {

    const choices = tasks.map((task, i) => {
        const idx = `${++i}. `.green;
        return {
            value: task.id,
            name: `${idx.green} ${task.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + '  Cancelar'
    })

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ];

    const { id } = await inquirer.prompt(questions);

    return id;
}

const confirm = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;

}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    tasksListDelete,
    confirm
}