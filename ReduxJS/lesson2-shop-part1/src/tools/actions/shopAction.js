export const addProduct = ({mytitle,myprice,mycategory,mydesc})=>({
    type:"ADD_PRODUCT",
    product:{
        id:crypto.randomUUID(),
        title:mytitle,
        price:myprice,
        category:mycategory,
        desc:mydesc
    }
})