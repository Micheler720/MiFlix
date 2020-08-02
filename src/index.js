import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './Pages/Cadastro/Video';
import CadastroCategoria from './Pages/Cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home} />  
        <Route path="/Cadastro/Video" exact component={CadastroVideo} />  
        <Route path="/Cadastro/Categoria" exact component={CadastroCategoria} />  
        <Route component={() => (<div>Erro 404</div>)} />
    </Switch>
  </BrowserRouter>,
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  document.getElementById('root')
);

