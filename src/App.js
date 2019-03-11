import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      color : 'Merah',
      img   : 'apel.jpg'
    };
  }

  //Untuk memperbarui state sesuai dengan menu yang dipilih
  clicked(menu){
    this.setState({
      color: menu.color,
      img  : menu.img,
    });
  }

  menuSaya(){
    let gambar;
    if(this.state.color.toLowerCase() === 'merah'){
      gambar = 'apel';
    } else if(this.state.color.toLowerCase() === 'kuning'){
      gambar = 'nanas';
    } else if(this.state.color.toLowerCase() === 'hijau'){
      gambar = 'mangga';
    } else if(this.state.color.toLowerCase() === 'biru'){
      gambar = 'anggur';
    }
    return (
      <img src={gambar+'.jpg'}></img>
    );
    
  }

  render() {
    return (
      <div id="app">
        {/*
          map akan loop sebanyak menu yang didefinisikan
        */}
        {/*
          kemudian mengembalikan elemen <a/>
        */}
          <nav className="nav">
            {
              this.props.items.map(
                (menu, index)=>{
                  var style = 'menu';
                  //const items = ['Home','Tab 2','Tab  3','Tab 4'];

                  if(this.state.color === menu.color){
                    style = `${style} is-active`;
                  }

                  return (
                    <a className={style+" "+menu.color} onClick={this.clicked.bind(this,menu)} key={index}>
                    {menu.color}
                    </a>
                  );
                }
              )
            }
        </nav>

        <div className="info">
            ini adalah <span className={"selected "+ this.state.color}>
            {this.state.color} </span>
        </div>

        <img src={ this.state.img } />
        {/*
          folder public
        */}
        <br/>
        {this.menuSaya()}
        <br/>
        <br/>

      </div>
    );
  }
}

export default App;
