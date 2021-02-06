import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddEtudiant from './GEtudiant/AddEtudiant'
import ListEtudiant from "./GEtudiant/ListEtudiant"
import AddProf from "./GProf/AddProf"
import ListProf from "./GProf/ListProf"
import AddFiliere from "./GFiliere/AddFiliere"
import ListFiliere from "./GFiliere/ListFiliere"
import AddNiveau from "./GNiveau/AddNiveau"
import ListNiveau from "./GNiveau/ListNiveau"
import AddSemestre from "./GSemestre/AddSemestre"
import ListSemestre from "./GSemestre/ListSemestre"
import AddModule from "./GModule/AddModule"
import ListModule from "./GModule/ListModule"
import ListService from "./GService/ListService"
import ListCours from "./GCours/ListCours"
import AddCours from "./GCours/AddCours"


const Routes = ()=>{
    return (
        <Switch>
            {/* <Route exact path="/" component={Main}/> */}
            <Route path="/listEtd" component={ListEtudiant}/>
            <Route path="/ajoutEtd" component={AddEtudiant}/>
            <Route path="/ajoutProf" component={AddProf}/>
            <Route path="/listProf" component={ListProf}/>
            <Route path="/listFiliere" component={ListFiliere}/>
            <Route path="/ajoutFiliere" component={AddFiliere}/>
            <Route path="/listNv" component={ListNiveau}/>
            <Route path="/ajoutNv" component={AddNiveau}/>
            <Route path="/listSemestre" component={ListSemestre}/>
            <Route path="/ajoutSemestre" component={AddSemestre}/>
            <Route path="/listModule" component={ListModule}/>
            <Route path="/ajoutModule" component={AddModule}/>
            <Route path="/listCours" component={ListCours}/>
            <Route path="/ajoutCours" component={AddCours}/>
            <Route path="/listService" component={ListService}/> 
        </Switch>
    )
}

export default Routes
