const express = require('express')
const app = express()

// REQ = REQUEST - - RES = RESPONSE

//http://localhost:3000/william/3763
app.get('/:user/:password', (req, res) => {
    const {user, password} = req.params
    if(user === 'William' & password === '3763'){
    res.json({msg: 'INICIO DE SESIÓN EXITOSO'})
        return
    }
    res.json({msg: 'FALLO EN EL USUARIO O CONTRASEÑA'})


})

app.post('/', (req, res) => {
    res.json({msg: 'HOLA POST'})
})
app.put('/', (req, res) => {
    res.json({msg: 'HOLA PUT'})
})
app.patch('/', (req, res) => {
    res.json({msg: 'HOLA PATCH'})
})
app.delete('/', (req, res) => {
    res.json({msg: 'HOLA DELETE'})
})

/*
*
*FUNCIONALIDAD
/
*/

// http://localhost:3000
app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
}) 