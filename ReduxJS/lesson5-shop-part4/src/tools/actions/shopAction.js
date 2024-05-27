import supabase from "../../supabase/clientSupabase";


export const getProducts = (products) => ({
    type: "GET_PRODUCT",
    products
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



export const editProductToDatabase = async (id,update) => {
    console.log(id);
    const {data,error} = await supabase.from('products').update(update).match({id:id});
    if (error) {
        console.log(error);
    }else{
        console.log(data);
        window.location.assign('/dashboard');
    }
}