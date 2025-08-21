import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { appRoutes } from './routes/appRoutes';


export interface AppRoute {
  path?: string,
  index?: boolean;
  element: React.ReactNode
  children?: AppRoute[]
}
function App() {
  function renderRoutes(routes: AppRoute[]) {
    return routes.map(({ path, index, element, children }) => {
      if (index) {
        return (
          <Route key="index" index element={element} />
        );
      } else {
        return (
          <Route key={path} path={path} element={element}>
            {children && renderRoutes(children)}
          </Route>
        );
      }
    })
  }
  return (
    <Router>
      <Routes>{renderRoutes(appRoutes)}</Routes>
    </Router>
  );
}

export default App;

