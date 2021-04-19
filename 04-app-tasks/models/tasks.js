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

    printListByState(valueMenu) {
        console.log();
        let count = 0;
        this.listArray.forEach(task => {
            const { desc, completedAt } = task;
            const state = (completedAt) ? completedAt.green : 'Pendiente'.red;
            // print completed
            if (valueMenu && completedAt) {
                count++;
                console.log(`${count} ${desc} :: ${state}`);
            }
            // print pending
            if (!valueMenu && completedAt === null) {
                count++;
                console.log(`${count} ${desc} :: ${state}`);
            }
        });
    }

    deleteTask(id) {
        if (this._list[id]) {
            delete this._list[id];
        }
    }

}

module.exports = Tasks;