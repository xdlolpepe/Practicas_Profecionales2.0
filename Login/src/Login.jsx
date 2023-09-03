import React from 'react'
//importando css
import './component/Login.css';
//importar imagen
import logo from "./component/img/Logo.png";
//importar servicios
import { Apiurl } from "./services/apirest.js";
//importar librerias
import axios from "axios";

class Login extends React.Component { 

    state={
        form:{
            'name':'',
            'password':''
        },
        error:false,
        errorMsg: ""
    }

    

    manejadorSubmit = e => {
        e.preventDefault();
    }

    manejadorChange = async e=> {
        await  this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form);
    }

    manejadorBoton = () => {

        let url = Apiurl ;
        axios.get(url,this.state.form) 
        .then (response =>{
            console.log(response);
        })
            console.log('enviado');
            console.log(url);
        }

    

render(){ 
    return(
        <React.Fragment>
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <br /><br />
                    <img src= {logo} width="150px" alt="User Icon" />
                        <br /><br />
                    </div>

                    <form onSubmit={this.manejadorSubmit}>
                        <input type="text"  className="fadeIn second" name="name" placeholder="name"  onChange = {this.manejadorChange} />
                        <input type="password"  className="fadeIn third" name="password" placeholder="password"  onChange = {this.manejadorChange} />
                        <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorBoton}/>
                    </form>

                    <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
 }
}


export default Login