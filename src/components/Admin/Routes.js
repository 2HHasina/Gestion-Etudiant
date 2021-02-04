import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Routes = ()=>{
    return (
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="listEtd" component={ListEtudiant}/>
            <Route path="ajoutEtd" component={AddEtudiant}/>
            <Route path="listProf" component={ListProf}/>
            <Route path="ajoutProf" component={AddProf}/>
            <Route path="/listFiliere" component={ListFiliere}/>
            <Route path="/ajoutFiliere" component={AddFiliere}/>
            <Route path="/listNv" component={ListNiveau}/>
            <Route path="/ajoutNv" component={AddNiveau}/>
            <Route path="/listSemestre" component={ListSemestre}/>
            <Route path="/ajoutSemestre" component={AddSemestre}/>
            <Route path="/listModule" component={ListModule}/>
            <Route path="/ajoutModule" component={AddModule}/>
            <Route path="/listService" component={ListService}/>
        </Switch>
    )
}

export default Routes
