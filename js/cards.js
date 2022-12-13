'use strict'

const listaPizzas =
    [
        {
            nome: 'Pizza de calabresa',
            foto: '../img/pizza1.png',
            preco: 'R$ 30,99',
            descricao: 'A pizza de calabresa é uma das delicias criadas...',
            tipo: 'Salgado',
            status_promocao: 1,
            status_favoritos: 1

        },
        
        {
            nome: 'Pizza de catupiry',
            foto: '../img/pizza1.png',
            preco: 'R$ 32,99',
            descricao: 'A pizza de catupiry é uma das delicias criadas...',
            tipo: 'Doce',
            status_promocao: 0,
            status_favoritos: 0
        },
        {
            nome: 'Coca-Cola',
            foto: '../img/bebida3.png',
            preco: 'R$ 5,99',
            descricao: 'A coca cola...',
            tipo: 'Bebida',
            litragem: 500,
            teor_alcoolico: 35.3,
            status_promocao: 1,
            status_favoritos: 0

        },
        {
            nome: 'Pizza HEXA queijo',
            foto: '../img/pizza1.png',
            preco: 'R$ 29,99',
            descricao: 'A pizza HEXA queijo é saborosa...',
            tipo: 'Vegetariano',
            status_promocao: 0,
            status_favoritos: 0

        },
        {
            nome: 'Pizza 4 queijos',
            foto: '../img/pizza1.png',
            preco: 'R$ 31,99',
            descricao: 'A pizza 4 queijos é saborosa...',
            tipo: 'Salgada',
            status_promocao: 1,
            status_favoritos: 1

        },
        {
            nome: 'Bebida saborosa',
            foto: '../img/bebida1.png',
            preco: 'R$ 4,99',
            descricao: 'A bebida saborosa é composta por...',
            tipo: 'Bebida',
            status_promocao: 0,
            status_favoritos: 1

        },
        {
            nome: 'Pizza de portuguesa',
            foto: '../img/pizza1.png',
            preco: 'R$ 31,99',
            descricao: 'A pizza portuguesa queijo é saborosa...',
            tipo: 'Salgada',
            status_promocao: 0,
            status_favoritos: 0

        },
        

    ]


const listarTodosProdutos = () => {

    listaPizzas.map(element => {


        const main = document.getElementById('div-container-listar')
        const ul = document.querySelector('ul')
        const div = document.createElement('div')
        const li = document.createElement('li')
        li.classList.add('li-container')

        
        li.innerHTML = `
        <img src="${element.foto}" alt="">   
                <h3>${element.nome}</h3>
            
                <div>${element.descricao}</div>
                <div>${element.tipo}</div>
        `
        div.classList.add('div-container-listar')
        div.appendChild(li)
        ul.appendChild(div)
        main.appendChild(div)

        if (element.status_promocao) {
            li.classList.add('promocao')
        }
        if (element.status_favoritos){
            li.classList.add('favorito')
        }
        if (element.status_favoritos && element.status_promocao){
            li.classList.add('favorito-promocao')
        }
    })
}


listarTodosProdutos()


