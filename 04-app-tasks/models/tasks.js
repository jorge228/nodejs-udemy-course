const Task = require("./task");

class Tasks {
    
    _list = {};

    constructor() {
        this._list = {};
    }

    create(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

}

module.exports = Tasks;