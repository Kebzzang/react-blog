
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//layouts import
import Navbar from './components/layouts/Navbar';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import Home from './components/pages/Home';
import Register from './components/pages/Register';
import pagenotfound from './components/pages/NotFoundPage';
import use_info from './components/pages/HowToUse';
import scholarship_list from './components/pages/Check';
import HowToUse from './components/pages/HowToUse';
//React Router import
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from './components/pages/NotFoundPage';
import Check from './components/pages/Check';

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
       <Navbar/>
       <Switch>
         <Route exact path="/" component={Home}/> 
         <Route path="/scholarship_list" component={Check}/>
         <Route path="/use_info" component={HowToUse}/>
         <Route component={NotFoundPage}/>
         <Route path="/register" component={Register}/>
       </Switch>
       <br />
       유구한 역사와 전통에 빛나는 우리 대한국민은 3·1운동으로 건립된 대한민국임시정부의 법통과 불의에 항거한 4·19민주이념을 계승하고, 조국의 민주개혁과 평화적 통일의 사명에 입각하여 정의·인도와 동포애로써 민족의 단결을 공고히 하고, 모든 사회적 폐습과 불의를 타파하며, 자율과 조화를 바탕으로 자유민주적 기본질서를 더욱 확고히 하여 정치·경제·사회·문화의 모든 영역에 있어서 각인의 기회를 균등히 하고, 능력을 최고도로 발휘하게 하며, 자유와 권리에 따르는 책임과 의무를 완수하게 하여, 안으로는 국민생활의 균등한 향상을 기하고 밖으로는 항구적인 세계평화와 인류공영에 이바지함으로써 우리들과 우리들의 자손의 안전과 자유와 행복을 영원히 확보할 것을 다짐하면서 1948년 7월 12일에 제정되고 8차에 걸쳐 개정된 헌법을 이제 국회의 의결을 거쳐 국민투표에 의하여 개정한다.
      <br/>
      <Footer/>
      </div>
    );
  }
}

export default App;

