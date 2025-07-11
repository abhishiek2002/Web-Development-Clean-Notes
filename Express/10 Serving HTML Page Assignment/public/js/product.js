function submitHandler(event) {
    event.preventDefault();
    
    const productName = event.target.productName.value;

    const obj = {
        product: productName
    }

    axios.post('http://localhost:4000'+'/api/products', obj).then(result => {
        console.log("Value of product:", result.data.value);
    })

    event.target.productName.value = "";
}