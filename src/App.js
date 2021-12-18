import logo from './logo.svg';
import './App.css';
import Cards from './Cards.js';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {ContextProvider} from './GlobalContext.js';
import {Cardexporter} from './Cardexporter.js';
import {Graph} from './Graph.js';
import {CountrySelector} from './CountrySelector.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App() {
  const classes = useStyles();

  return (

   <ContextProvider>
     <div className={classes.root}>
        <Cardexporter />
        <CountrySelector />
        <Graph />
     </div>
  </ContextProvider>
  );
}

export default App;
