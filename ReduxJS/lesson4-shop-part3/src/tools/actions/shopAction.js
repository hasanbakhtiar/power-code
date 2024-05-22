import supabase from "../../supabase/clientSupabase";
import shopStore from "../store/shopStore"
const store = shopStore();

export const addProduct = ({ id, title, price, img, category, desc }) => ({
    type: "ADD_PRODUCT",
    product: {
        id, title, price, img, category, desc
    }
})

export const addProductToDatabase = async (product) => {
    const { data, error } = await supabase.from('products').insert(product);
    if (error) {
        console.log(error);
    } else {
        console.log(data);
        window.location.assign('/dashboard');
    }
}

export const deleteProduct = ({ id }) => ({
    type: "DELETE_PRODUCT",
    id
})


export const deleteProductToDatabase = async (id) => {
    console.log(id);
    const {data,error} = await supabase.from('products').delete().eq('id',id);
    if (error) {
        console.log(error);
    }else{
        console.log(data);
        window.location.assign('/dashboard');
    }
}

export const editProduct = (id, update) => ({
    type: "UPDATE_PRODUCT",
    id, update
})