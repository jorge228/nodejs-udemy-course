const Task = require("./task");

class Tasks {

    _list = {};

    get listArray() {
        const list = [];
        Object.keys(this._list).forEach(key => {
            list.push(this._list[key]);
        });
        return list;
    }

    constructor() {
        this._list = {};
    }

    create(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    createList(data = []) {
        // data.forEach(tarea => {
        //     this._list[task.id] = task;
        // });
        this._list = data;
    }

    printListFormat() {
        // if (!this._list.length) {
        //     console.log('No hay tareas.');
        // } else {
        //     let i = 0;
        //     this._list.forEach(task => {
        //         let state = '';
        //         task.completedAt === null ? state += 'Pendiente' : state += 'Completado'
        //         console.log(`${++i}. ${task.desc} :: ${state} `);

        //     });
        // }
        console.log();
        this.listArray.forEach((task, i) => {
            const idx = `${i + 1}.`.green;
            const { desc, completedAt } = task;
            const state = (completedAt) ? 'Completado'.green : 'Pendiente'.red;
            console.log(`${idx} ${desc} :: ${state}`);
        });
    }

}

module.exports = Tasks;