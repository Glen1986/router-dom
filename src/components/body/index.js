import {
  Switch,
  Route
} from "react-router-dom";
import { Home, About, Dashboard } from '../../components'
export default ({title, ...rest}) => {
  return(
    <>
        <Switch>
          <Route exact path="/">
            <Home title='Home'/>
          </Route>
          <Route path="/about">
            <About title="About" />
          </Route>
          <Route path="/dashboard">
            <Dashboard title="Dashboard"/>
          </Route>
        </Switch>

    </>
  )
}
