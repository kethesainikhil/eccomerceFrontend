export function getAllProducts(id) {
    return new Promise((resolve) =>{
       fetch(`http://localhost:3000/${id}`,{
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
       fetch(`http://localhost:3000/${productCategory}/${productId}`,{
        method:"GET",
        headers:{'content-type':'application/json'}
      }).then(async (response)=>{
        const data = await response.json()
        resolve({data})
      })
      
    })
  }