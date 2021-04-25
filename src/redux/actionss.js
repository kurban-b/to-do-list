export function loadingData(){
    return function (dispatcher) {
        dispatcher({
            type: 'loading-start'
        })

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(responce => responce.json())
            .then((json) => {
                dispatcher({
                    type: 'dataTodos',
                    payload: json
                })
            })
    }
}

export function deleteTodo (id) {
    return function (dispatcher) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method: 'DELETE'
        })
            .then(responce => responce.json())
            .then(()=>{
                dispatcher({
                    type: 'delete',
                    payload: id
                })
            })
    }
}

export function changeComplited (id, completed) {
    return function (dispatcher) {
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
                    type: 'changeCheckbox',
                    payload: id
                })
            })
    }
}