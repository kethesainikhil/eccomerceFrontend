export function AddToCart(product) {
    const {
      id,
      title,
      image_url,
      category,
      quantity,
      price,userId
    } = product
    console.log(id,
      title,
      image_url,
      category,
      quantity,
      price)
      console.log(userId,"useid chekcing in api ")
    return new Promise((resolve) =>{
       fetch("http://localhost:3000/addtocart",{
        method:"POST",
        body:JSON.stringify({
          id,
          title,
          image_url,
          category,
          quantity,
          price,
          userId
        }),
        headers:{'content-type':'application/json'}
      }).then(async (response)=>{
        console.log("got response")
        const data = await response.json()
        console.log(data,"i got in api")
        resolve(data)
      }).catch((error)=>{
        console.log(error)
      })  
    })
  }
export function deleteToCart(id) {
    return new Promise((resolve) =>{
       fetch(`http://localhost:3000/${id}`,{
        method:"DELETE",
        headers:{'content-type':'application/json'}
      }).then(async (response)=>{
        const data = await response.json()
        resolve(data)
      })

    })
  }
export function updateToCart(productDetails) {
    const {productCategory,productId} = productDetails
    return new Promise((resolve) =>{
       fetch(`http://localhost:3000/${productCategory}/${productId}`,{
        method:"GET",
        headers:{'content-type':'application/json'}
      }).then(async (response)=>{
        const data = await response.json()
        resolve(data)
      })
      
    })
  }

