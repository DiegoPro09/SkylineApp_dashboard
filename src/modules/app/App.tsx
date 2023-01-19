import './App.css'
import { Route, Routes  } from 'react-router-dom';
import { PUBLIC_ROUTES } from './appRoutes';

function App() {

  return (
    <>
      <Routes>
        <Route path='/'>
          {/*   RUTAS PUBLICAS   */ }
          {PUBLIC_ROUTES.map((page, index) => 
            <Route key ={index} path={page.path} element={page.component}/>
          )}
        </Route>
      </Routes>
    </>
  );
}

export default App