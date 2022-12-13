const getAllPizzas = async ()=>{
    const url = ``

    const response = fetch(url)

    const pizzas = response.json()

    return pizzas
} 