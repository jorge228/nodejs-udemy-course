
// setTimeout(() => {
//     console.log('Hello World');
// }, 1000);


const getUserById = (id, callback) => {

    const user = {
        // id = id,
        id,
        name: 'Jorge'
    }

    setTimeout(() => {
        callback(user)
    }, 1500)

}

// (user) =>{} is a callback 
getUserById(10, (resp) => {
    console.log(resp.id);
    console.log(resp.name.toUpperCase());
});



