import './App.css'
import { Route, Routes  } from 'react-router-dom';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './appRoutes';
import { AppLayout } from './layout/appLayout/AppLayout';
import { useAuthContext } from '../auth/AuthContext';

function App() {

  const {isLoggedIn} = useAuthContext()

  return (
    <>
      <Routes>
        <Route path='/'>
          {/*   RUTAS PUBLICAS   */ }
          {PUBLIC_ROUTES.map((page, index) => 
            <Route key ={index} path={page.path} element={page.component}/>
          )}

          {/* private routes */}
          {isLoggedIn  &&
              PRIVATE_ROUTES.map((page,index)=>
                <Route  
                  key={index} 
                  path={`${page.path}`} 
                  element={
                    <AppLayout children={page.component}/> 
                  } 
                />
              )
            }
        </Route>
      </Routes>
    </>
  );
}

export default App