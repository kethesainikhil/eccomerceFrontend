export function AddToCart(product) {
    const {
      id,
      title,
      image_url,
      category,
      quantity,
      price,
      userId
    } = product
    console.log(id,
      title,
      image_url,
      category,
      quantity,
      price)
      console.log(userId,"useid chekcing in api ")
    return new Promise((resolve) =>{
      console.log("in promiseeee")
       fetch("https://ecommercebackend-9fmc.onrender.com/cart/addtocart",{
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
export function deleteToCart(cartId) {
    return new Promise((resolve) =>{
       fetch("https://ecommercebackend-9fmc.onrender.com/cart/deleteItem/",{
        method:"DELETE",
        body:JSON.stringify(cartId),
        headers:{'content-type':'application/json'}
      }).then(async (response)=>{
        const data = await response.json()
        resolve(data)
      })

    })
  }
export function updateToCart(productDetails) {
    const {cartId,quantity,price} = productDetails
    return new Promise((resolve) =>{
       fetch("https://ecommercebackend-9fmc.onrender.com/cart/updateItem",{
        method:"PATCH",
        body:JSON.stringify({cartId,quantity,price}),
        headers:{'content-type':'application/json'}
      }).then(async (response)=>{
        const data = await response.json()
        resolve(data)
      })
    })
  }
export function getCartItems(userId) {
    return new Promise((resolve) =>{
       fetch(`https://ecommercebackend-9fmc.onrender.com/cart/cartItems/${userId}`,{
        method:"GET",
        headers:{'content-type':'application/json'}
      }).then(async (response)=>{
        const data = await response.json()
        resolve(data)
      })
      
    })
  }

