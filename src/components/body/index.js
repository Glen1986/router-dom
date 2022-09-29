import {
  Switch,
  Route
} from "react-router-dom";
import { Home, About, Dashboard, Portafolio } from '../../components'
export default ({title, ...rest}) => {
  return(
    <>
        <Switch {...rest}>
          <Route exact path="/">
            <Home title='Home'/>
          </Route>
          <Route path="/about">
            <About title="About" />
          </Route>
          <Route path="/dashboard">
            <Dashboard title="Dashboard"/>
          </Route>
          <Route path="/portafolio">
            <Portafolio title="Portafolio"/>
          </Route>
        </Switch>

    </>
  )
}
