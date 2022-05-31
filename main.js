'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

    const tempClient = {
        codigo:"99999",
        data:"22/05/2022",
        responsavel:"Rafael",
        Observacoes:"aaaaaaaaaa"
    }

    /*Pega a informação do banco de dadoe e armazena na db*/
    const getLocalStorage = () => JSON.parse (localStorage.getItem('db_client'))?? []
    const setLocalStorage = (db_client) => localStorage.setItem("db_client", JSON.stringify (db_client))


    const updateClient = (client) => {
        const db_client = readClient()
    }

    const readClient = (client) => getLocalStorage()

    /*Cadastro de infomação no storage*/
    const createClient = (client) => {
        const db_client = getLocalStorage()
        db_client.push(client)
        setLocalStorage(db_client)
        
    }

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)