import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isNull } from "lodash";
import Beranda from './Beranda';
import '../asset/css/Style.css';

export default class Login extends React.Component{
  constructor() {
    super();
    this.state = {
      title: "Sign In",
      username: "",
      password: "",
      isRedirect: false,
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    this.setState({
      isLoading: true
    });
    if (username === "wahyudi" && password === "wahyudi") {
      localStorage.setItem("token", "ijkqwerty");
      this.setState({
        isRedirect: true,
        isLoading: false
      });
    } 
    else if (username === "" && password === ""){
      alert("username atau password tidak boleh kosong")
    }
    else if (username != "" && password != ""){
      alert("username atau password salah")
    }
    else {
      this.setState({
        username: ""
      });
    }
  }
     
      
      render(){
        const { username, password, isRedirect, isLoading } = this.state;
        const isToken = localStorage.getItem("token");
        const checkedToken = isNull(isToken) ? false : true;
        if (checkedToken === true || isRedirect === true) {
        return <Redirect to="/beranda" />;
        } else {
        return(
          <div className="container" id="container-signin">
        <h3 align="center">{this.state.title}</h3> 
         <br/> 
        <input 
          type="text"
          name="username"
          className="form-control"
          placeholder="username ..."
          value={this.state.username}
          onChange={this.onChange}
        />
        <br/>
        <input 
          type="password"
          name="password"
          className="form-control"
          placeholder="password ..."
          value={this.state.password}
          onChange={this.onChange}
        />
        <br/>
        <input
        type="submit" 
        className="btn btn-primary"
        isLoading={isLoading} 
        onClick={this.onSubmit}
        value="Masuk"
        />  
        
        </div>
        )
      }
      }
}