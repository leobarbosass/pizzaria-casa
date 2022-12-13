'use strict'

const listaServicos =
    [
        {
            nome: 'Servicos na loja',
            foto: '../img/pizza1.png',
            descricao: 'Os servicos na loja...',
        },
        {
            nome: 'Delivery',
            foto: '../img/pizza1.png',
            descricao: 'O delivery é...',
        },
        {
            nome: 'Drive Thru',
            foto: '../img/pizza1.png',
            descricao: 'O drive thru...',
        },
        {
            nome: 'Entrega via drone',
            foto: '../img/pizza1.png',
            descricao: 'A entrega via drone...',
        },
        

    ]

    const listarTodosServicos = () => {

        listaServicos.map(element => {
    
    
            const main = document.getElementById('listar-servicos')
            const ul = document.querySelector('ul')
            const div = document.createElement('div')
            const li = document.createElement('li')
            ul.classList.add('ul-container-servicos')
            li.classList.add('li-container-servicos')
    
            
            li.innerHTML = `
            <img src="${element.foto}" alt="">   
                    <h3>${element.nome}</h3>
                
                    <div>${element.descricao}</div>
            `
            div.classList.add('listar-servicos')
            div.appendChild(li)
            ul.appendChild(div)
            main.appendChild(div)
    
        })
    }
    
    
    listarTodosServicos()
    
    