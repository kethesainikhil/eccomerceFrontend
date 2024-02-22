export function getUser({data}) {
  console.log(data,'password')
    return new Promise((resolve) =>{
       fetch("http://localhost:3000/login/",{
        method:"POST",
        body:JSON.stringify({email:data.email,password:data.password}),
        headers:{'content-type':'application/json'}
      }).then(async (response)=>{
        const data = await response.json()
        resolve(data)
      })
      
    })
  }
