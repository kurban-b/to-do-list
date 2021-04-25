export function loadingData(){
    return function (dispatcher) {
        dispatcher({
            type: 'todos/loading/start'
        })

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(responce => responce.json())
            .then((json) => {
                dispatcher({
                    type: 'todos/todo/get-todos',
                    payload: json
                })
            })
    }
}

export function deleteTodo (id) {
    return function (dispatcher) {
        dispatcher({
            type: 'todo/btn-delete/disabled',
            payload: id
        })

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method: 'DELETE'
        })
            .then(responce => responce.json())
            .then(()=>{
                dispatcher({
                    type: 'todo/btn-delete/delete',
                    payload: id
                })
            })
    }
}

export function changeComplited (id, completed) {
    return function (dispatcher) {
        dispatcher({
            type: 'todo/checkbox/loader',
            payload: id
        })


        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method: 'PATCH',
            body: JSON.stringify({
                'completed': `${!completed}`,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(responce => responce.json())
            .then(()=>{
                dispatcher({
                    type: 'todo/checkbox/change',
                    payload: id
                })
            })
    }
}