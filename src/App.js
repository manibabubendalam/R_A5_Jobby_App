import { Switch, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";
import {Jobs} from "./components/Jobs/Jobs";
import {JobItemDetails} from "./components/JobItemDetails/JobItemDetails"
import {ProtectedRoute} from './components/ProtectedRoute/ProtectedRoute'
import {NotFound} from './components/NotFound/NotFound'

import "./App.css";

//These are the lists used in the application. You can move them to any component needed.
const employmentTypesList = [
  {
    label: "Full Time",
    employmentTypeId: "FULLTIME",
  },
  {
    label: "Part Time",
    employmentTypeId: "PARTTIME",
  },
  {
    label: "Freelance",
    employmentTypeId: "FREELANCE",
  },
  {
    label: "Internship",
    employmentTypeId: "INTERNSHIP",
  },
];

const salaryRangesList = [
  {
    salaryRangeId: "1000000",
    label: "10 LPA and above",
  },
  {
    salaryRangeId: "2000000",
    label: "20 LPA and above",
  },
  {
    salaryRangeId: "3000000",
    label: "30 LPA and above",
  },
  {
    salaryRangeId: "4000000",
    label: "40 LPA and above",
  },
];

// Replace your code here
const App = () => (
  <div className="app-container">
    <Switch>
      <ProtectedRoute path="/login" component={Login} />
      <ProtectedRoute path="/" exact component={Home} />
      <ProtectedRoute path="/jobs" exact component={Jobs} />
      <ProtectedRoute path="/jobs/1" component={JobItemDetails} />
      <ProtectedRoute component={NotFound}/>
    </Switch>
  </div>
);

export default App;
