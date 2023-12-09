import React, { useEffect, useState } from 'react'
import './LoginRegistro.css'
import {Navigate, useNavigate} from 'react-router-dom'
import Listagem from '../Listagem/Listagem.jsx'



const LoginRegistro = () => {

    const[action,setAction] = useState("Login");
    const[password, setPassword] = useState('');
    const[message, setMessage] = useState('');
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const userData = JSON.parse(localStorage.getItem('userData'));

        if(userData && userData.email === email && userData.password === password) {
            setLoggedIn(true);
            alert("login bem sucessido")

        }
        else {
            alert("credenciais invalidas")
        }
    }
    if (loggedIn) {
        navigate("/home")
    }

    var valida = false;

    


    function handleChange(e) {
        setPassword(e.target.value)
    }
    const handleValidation = (e) => {
        e.preventDefault()
        const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
        if(password === '') {
            setMessage("Senha deve possuir uma letra maiúscula, minúscula, número e caractere especial")
            valida = false;
        } else if (regExp.test(password)) {
            setMessage("Senha é válida");
            valida = true;
        } else if (!regExp.test(password)) {
            setMessage("Senha não é válida")
            console.log("NAO")
            valida = false;
        } else{
            setMessage("Senha é válida")
        }
        const userData = localStorage.getItem('userData');
        console.log(userData);
    }
    const Register = (e) => {
        var email = document.getElementById('email').value;
        var nome = document.getElementById('nome').value;
        console.log(nome)
        console.log(email)
        e.preventDefault()
        if(valida === true && email !== null && nome !== null) {
            localStorage.setItem('userData', JSON.stringify({name, email, password}));
            console.log("entrou")
            alert("Conta Criada com sucesso");
        }
        else {
            console.log("ta errado man")
        }

    }
    const Clear = (e) => {
        e.preventDefault()
        localStorage.clear();
    }

    const Entra = (e) => {
        e.preventDefault()
        console.log("ok")
    }



  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray" : "submit"} onClick={() =>{setAction("Registro")} }>Registro</div>
            <div className={action==="Registro"?"submit gray" : "submit"} onClick={() =>{setAction("Login")}}>Login</div>
            </div>
        <div className="inputs">
            {action==="Login"?<div></div>:  <div className="input">
                <input type="text" 
                placeholder='Nome'
                value={name}
                id ='nome'
                onChange={(e) => setName(e.target.value)}
                />
            </div>}

            <div className="input">
                <input type="email" 
                placeholder='Email'
                value={email}
                id ='email'
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <form onSubmit={handleValidation}>
            <div className="input">
                <input type="password" placeholder='Senha'
                onChange={handleChange} value ={password} />
                <button>Check</button>
            </div>
            </form>
            <p id='forgot'>{message}</p>
            {action==="Registro" ? <div></div> : <div className="forgot-pass">Esqueceu a senha? <span>Clique aqui</span></div>}
        </div>
        {loggedIn ? (
            <div>
            {/* Conteúdo para usuário logado */}
            <h2>Você está logado!</h2>
            <button onClick={() => setLoggedIn(false)}>Logout</button>
          </div>
        ) : (
            <div>
          {/* Formulário de login ou registro */}
          {/* ... Seu código existente ... */}
        </div>

        )}
          <div className='form'>

              {action === "Registro" ? <form id='Limpar' onSubmit={Register}>
                  <button type='submit' id='Login'>Registro</button>
              </form> : <div></div>}


              {action === "Registro" ? <div></div> : <form id='Limpar' onSubmit={handleLogin}>
                  <button type='submit' id='Login'>Entra</button>
              </form>}

              <form id='Limpar' onSubmit={Clear}>
                  <button type='submit' id='Clear'>Limpar</button>
              </form>

          </div>


      </div>
  )
}

export default LoginRegistro