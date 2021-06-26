import React from 'react';
import loadable from '@loadable/component';

import { Switch, Route, Redirect } from 'react-router-dom';
// import Login from '@pages/Login'
// import SignUp from '@pages/SignUp'
const Login = loadable(() => import('@pages/Login')); // next dynamic import ?
const SignUp = loadable(() => import('@pages/SignUp'));

const App: Function = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default App;

// export default function App2() {
//   return (
//     <Switch>
//       <Redirect exact path='/' to='/login' />
//       <Route path='/login' component={Login} />
//       <Route path='/signup' component={SignUp} />
//     </Switch>
//   )
// }

// #Redirect 는 login으로 리다이렉트
// 서버랜더링SSR 안되는데 애들은, 어떤 컴포넌트를 분리할것이나, 코드스프리팅으로 분리한다.
// emotion 이 서버사이드 랜더링할때 쉽다.
