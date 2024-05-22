export const addProduct = ({ title, price, img, category, desc }) => ({
    type: "ADD_PRODUCT",
    product: {
        id: crypto.randomUUID(),
        title, price, img, category, desc
    }
})

export const deleteProduct = ({id})=>({
    type:"DELETE_PRODUCT",
    id
})

export const editProduct = (id,update)=>({
    type:"UPDATE_PRODUCT",
    id,update
})