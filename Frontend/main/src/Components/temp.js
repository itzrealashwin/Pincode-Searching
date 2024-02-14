function handleData(){
    debugger
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(data=>{
      debugger
       console.log(data);
      })
    
   }

   handleData()
