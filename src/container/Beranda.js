import React, { Component } from 'react';
import '../asset/css/Style.css';

export default class Beranda extends Component {

    constructor(props){
      super(props);
      this.state={
        subjudul: "Tambah Data",
        subhasil: "Data",
        act: 0,
        index: '',
        datas: []
      }
    } 
  
    componentDidMount(){
      this.refs.name.focus();
    }
  
    wSubmit = (e) =>{
      e.preventDefault();
  
      let datas = this.state.datas;
      let name = this.refs.name.value;
      
  
      if(this.state.act === 0){   //tambah
        let data = {
          name
        }
        alert("berhasil tambah data")
        datas.push(data);
      }
      
      else{                      //update
        let index = this.state.index;
        datas[index].name = name;
    
      }    
  
      this.setState({
        datas: datas,
        act: 0
      });
  
      this.refs.myForm.reset();
      this.refs.name.focus();
    }
  
    fRemove = (i) => {
      let datas = this.state.datas;
      datas.splice(i,1);
      this.setState({
        datas: datas
      });
  
      this.refs.myForm.reset();
      this.refs.name.focus();
    }
  
    
  
    render() {
      let datas = this.state.datas;
      return (
        <div>
          <div className="container" id="container-beranda">
          <form ref="myForm" className="myForm">
            <h3>{this.state.subjudul}</h3>
            <br/>
            <input type="text" ref="name" placeholder="tambah data ..." className="form-control" id="form-beranda" />
            <br />
            <button onClick={(e)=>this.wSubmit(e)} className="btn btn-primary">Tambah </button>
          </form>
          </div>
          <pre className="container-md" id="container-hasil">
            <h3>{this.state.subhasil}</h3>
            {datas.map((data, i) =>
            <div className="row">
              <div className="col">
                <div key={i} className="form-control" id="form-hasil">
                  {i+1}. {data.name}
                </div>
              </div>  
              <div className="col">
                <button onClick={()=>this.fRemove(i)} className="btn btn-danger" id="btn-danger"><i className="fa fa-trash"></i></button>
              </div>
            </div>  
            )}
          </pre>
        </div>
      );
    }
  }
  