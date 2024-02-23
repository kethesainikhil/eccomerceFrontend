export function getUser({data}) {
  console.log(data,'password')
    return new Promise((resolve) =>{
       fetch("https://ecommercebackend-9fmc.onrender.com/login/",{
        method:"POST",
        body:JSON.stringify({email:data.email,password:data.password}),
        headers:{'content-type':'application/json'}
      }).then(async (response)=>{
        const data = await response.json()
        resolve(data)
      })
      
    })
  }
export function postUser({data}) {
  console.log(data,'password')
    return new Promise((resolve) =>{
       fetch("https://ecommercebackend-9fmc.onrender.com/signup",{
        method:"POST",
        body:JSON.stringify({email:data.email,password:data.password}),
        headers:{'content-type':'application/json'}
      }).then(async (response)=>{
        const data = await response.json()
        resolve(data)
      })
      
    })
  }
