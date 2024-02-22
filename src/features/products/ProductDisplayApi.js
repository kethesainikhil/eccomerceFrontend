export function getAllProducts(id) {
    return new Promise((resolve) =>{
       fetch(`https://ecommercebackend-9fmc.onrender.com/${id}`,{
        method:"GET",
        headers:{'content-type':'application/json'}
      }).then(async (response)=>{
        const data = await response.json()
        resolve(data)
      })
      
    })
  }
export function selectProduct(productDetails) {
    return new Promise((resolve) =>{
      const {productCategory,productId} = productDetails
       fetch(`https://ecommercebackend-9fmc.onrender.com/${productCategory}/${productId}`,{
        method:"GET",
        headers:{'content-type':'application/json'}
      }).then(async (response)=>{
        const data = await response.json()
        resolve({data})
      })
      
    })
  }