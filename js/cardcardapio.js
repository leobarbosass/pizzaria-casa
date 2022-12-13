'use strict'

const listaCardapio =
    [
        {
            foto: './img/pizza1.png',
            nome: 'Pizza LaPizza Prime',
            preco: 'R$ 45,99',
            descricao: 'A pizza prime da LaPizza...',
            status_promocao: 0,
            status_favoritos: 1
        },
        {
            foto: './img/pizza1.png',
            nome: 'Coca-Cola',
            preco: 'R$ 5,99',
            descricao: 'A coca-cola...',
            status_promocao: 0,
            status_favoritos: 1
        },
        {
            foto: './img/pizza1.png',
            nome: 'Pizza de calabresa',
            preco: 'R$ 25,99',
            descricao: 'A Pizza de calabresa...',
            status_promocao: 1,
            status_favoritos: 1
        },
        {
            foto: './img/pizza1.png',
            nome: 'Pizza de catupiry',
            preco: 'R$ 35,99',
            descricao: 'A Pizza de catupiry...',
            status_promocao: 1,
            status_favoritos: 1
        },
        {
            foto: './img/pizza1.png',
            nome: 'Pizza de catupiry',
            preco: 'R$ 35,99',
            descricao: 'A Pizza de catupiry...',
            status_promocao: 0,
            status_favoritos: 1
        },
        {
            foto: './img/pizza1.png',
            nome: 'Pizza de catupiry',
            preco: 'R$ 35,99',
            descricao: 'A Pizza de catupiry...',
            status_promocao: 0,
            status_favoritos: 1
        },
        {
            foto: './img/pizza1.png',
            nome: 'Pizza de catupiry',
            preco: 'R$ 35,99',
            descricao: 'A Pizza de catupiry...',
            status_promocao: 1,
            status_favoritos: 1
        },
        

    ]

    const listarTodoCardapio = () => {

        listaCardapio.map(element => {
    
    
            const main = document.getElementById('listar-cardapio-container')
            const ul = document.querySelector('ul')
            const div = document.createElement('div')
            const li = document.createElement('li')
            ul.classList.add('ul-container-cardapio')
            li.classList.add('li-container-cardapio')
    
            
            li.innerHTML = `
                <img src="${element.foto}" alt="" class="img-container-cardapio"> 
                <div>
                    <h3>${element.nome}</h3>
                    <div>${element.descricao}</div>
                </div>
                    <div>${element.preco}</div>
                    
            `
            div.classList.add('listar-cardapio')
            div.appendChild(li)
            ul.appendChild(div)
            main.appendChild(div)


            if (element.status_promocao) {
                li.classList.add('cardapio-promocao')
            }
    
        })
    }
    
    
    listarTodoCardapio()
    