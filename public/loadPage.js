fetch("/index/loadPage").then(response=>{
    response.json().then(response=>{
        console.log(response);
    })
})