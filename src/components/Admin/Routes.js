import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AddEtudiant from "./GEtudiant/AddEtudiant";
import ListEtudiant from "./GEtudiant/ListEtudiant";
import AddProf from "./GProf/AddProf";
import ListProf from "./GProf/ListProf";
import AddFiliere from "./GFiliere/AddFiliere";
import ListFiliere from "./GFiliere/ListFiliere";
import AddNiveau from "./GNiveau/AddNiveau";
import ListNiveau from "./GNiveau/ListNiveau";
import AddSemestre from "./GSemestre/AddSemestre";
import ListSemestre from "./GSemestre/ListSemestre";
import AddModule from "./GModule/AddModule";
import ListModule from "./GModule/ListModule";
import ListService from "./GService/ListService";
import ListCours from "./GCours/ListCours";
import AddCours from "./GCours/AddCours";

const Routes = () => {
    return (
      <Switch>
        <Route exact path="/admin">
          <Redirect to='/admin/listService'/>
        </Route>
        <Route path="/admin/listEtd" component={ListEtudiant} />
        <Route path="/admin/ajoutEtd" component={AddEtudiant} />
        <Route path="/admin/ajoutProf" component={AddProf} />
        <Route path="/admin/listProf" component={ListProf} />
        <Route path="/admin/listFiliere" component={ListFiliere} />
        <Route path="/admin/ajoutFiliere" component={AddFiliere} />
        <Route path="/admin/listNv" component={ListNiveau} />
        <Route path="/admin/ajoutNv" component={AddNiveau} />
        <Route path="/admin/listSemestre" component={ListSemestre} />
        <Route path="/admin/ajoutSemestre" component={AddSemestre} />
        <Route path="/admin/listModule" component={ListModule} />
        <Route path="/admin/ajoutModule" component={AddModule} />
        <Route path="/admin/listCours" component={ListCours} />
        <Route path="/admin/ajoutCours" component={AddCours} />
        <Route path="/admin/listService" component={ListService} />
      </Switch>
    );
  } 

export default Routes;
