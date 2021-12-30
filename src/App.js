import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InputBase from '@material-ui/core/InputBase';
import { Button, Typography, IconButton } from '@material-ui/core';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  toolbarRoot: {
    backgroundColor: '#DC3D4B',
    display: 'flex',
    justifyContent: 'space-between'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#FFF',
    border: '2.5px solid #fff',
    borderRadius: 5
  },
  inputInput: {
    padding: theme.spacing(1.4, 1, 1.4, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: 240,
  },
  boxMenus: {
    display: 'flex',
    marginRight: 40
  },
  textMenu: {
    padding: '0px 10px', 
    color: '#FFF'
  },
  boxAnuncio: {
    minHeight: 600,
    width: '100%',
    border: '1px solid #FA4454',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  sombra: {
    filter: 'blur(8px)', 
    background: 'rgba(44, 43, 43, 0.5)', 
    width: '80%', 
    height: 7, 
    position: 'absolute', 
    bottom: 25, 
    borderRadius: '100%' 
  },
  cardAgente: {
    position: 'relative', 
    backgroundColor: '#DC3D4B', 
    height: 320, 
    width: 230, 
    borderRadius: 20, 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column'
  },
  cardSpray: {
    position: 'relative', 
    backgroundColor: '#FFF',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column',
    minWidth: 240,
    marginBottom: 16,
  },
  textTitulo: {
    fontSize: 64, 
    width: 500, 
    fontWeight: 'bold', 
    lineHeight: 1
  },
  buttonSaibaMais: {
    backgroundColor: '#FA4454',
    color: '#FFF',
    width: '100%',
    height: 50
  },
  boxAgente: {
    display: 'flex',
    padding: '20px 0px',
    justifyContent: 'space-around',
    width: '100%',
    flexWrap: 'wrap'
  },
  textNameAgente: {
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 20, 
    marginBottom: 10
  },
  buttonAllAgentes: {
    color: '#FA4454', 
    alignSelf: 'center', 
    marginTop: 16, 
    border: '3px solid #FA4454'
  },
  boxRootAgentes: {
    padding: 50, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-start'
  },
  buttonAllSprays: {
    color: '#FFF', 
    alignSelf: 'center', 
    marginTop: 16, 
    border: '3px solid #FFF'
  },
  boxMapa: {
    display: 'flex',
    padding: '20px 0px',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap'
  },
  cardMapa: {
    backgroundColor: '#DC3D4B', 
    height: 520, 
    width: 230,
  },
  cardArma: {
    position: 'relative', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column',
    minWidth: 240,
    marginBottom: 16,
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbarRoot}>
        <img src='/assets/VMW.png' alt='' width={100}/>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className={classes.boxMenus}>
            <Button className={classes.textMenu}>Home</Button>
            <Button className={classes.textMenu}>Agentes</Button>
            <Button className={classes.textMenu}>Mapas</Button>
            <Button className={classes.textMenu}>Modos de jogo</Button>
            <Button className={classes.textMenu}>Ranques</Button>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Pesquise um agente, mapa..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const Component1 = () => {
  const classes = useStyles();
  return (
    <div style={{ padding: 50 }}>
      <div className={classes.boxAnuncio}>
        <div>
          <Typography className={classes.textTitulo}>Valorant: o jogo competitivo 5x5</Typography>
          <div style={{ width: 354 }}>
            <Typography style={{ margin: '16px 0px' }}>Um FPS tático 5x5 com personagens marcantes, mecânica de tiro precisa e habilidades únicas! </Typography>
            <Button className={classes.buttonSaibaMais} variant="contained">SAIBA MAIS</Button>
          </div>
        </div>
        <img alt='' src="/assets/cardzao-image.png" />
      </div>
    </div>
  );
};

const Component2 = ({ agentes }) => {
  const classes = useStyles();
  return (
    <div className={classes.boxRootAgentes}>
      <Typography style={{ fontSize: 36 }}>Agentes</Typography>
      <div className={classes.boxAgente}>
        {agentes.slice(0, 5).map((agente) => (
          <div className={classes.cardAgente}>
            <Typography className={classes.textNameAgente}>{agente.displayName}</Typography>
            <img alt='' src={agente.fullPortrait} height={240}/>
            <div className={classes.sombra}></div>
          </div>
        ))}
      </div>
      <Button className={classes.buttonAllAgentes} variant="outlined">VER TODOS OS AGENTES</Button>
    </div>
  );
}

const Component3 = ({ sprays }) => {
  const classes = useStyles();
  return (
    <div style={{ backgroundImage: 'url("/assets/background.png")', minHeight: 600, padding: 50, display: 'flex', flexDirection: 'column' }}>
      <Typography style={{ fontSize: 36, color: "#FFF" }}>Sprays</Typography>
      <div className={classes.boxAgente}>
        {sprays.slice(0, 11).map((agente) => agente.fullIcon && (
          <div className={classes.cardSpray}>
            <Typography className={classes.textNameAgente} style={{ position: 'absolute', top: 10, textAlign: 'center', color: '#000', textShadow: '1px 1px 1px #000' }}>{agente.displayName}</Typography>
            <img alt='' src={agente.fullIcon} height={240}/>
          </div>
        ))}
      </div>
      <Button className={classes.buttonAllSprays} variant="outlined">VER TODOS OS SPRAYS</Button>
    </div>
  );
}

const Component4 = ({ mapas }) => {
  const classes = useStyles();
  return (
    <div className={classes.boxRootAgentes}>
      <Typography style={{ fontSize: 36 }}>Mapas</Typography>
      <div className={classes.boxMapa}>
        {mapas.slice(0, 6).map((mapa) => (
          <div className={classes.cardMapa}>
            <img style={{ objectFit: 'cover', objectPosition: '50%' }} alt="" width="100%" height="100%" src={mapa.splash} />
          </div>
        ))}
      </div>
      <Button className={classes.buttonAllAgentes} variant="outlined">VER TODOS OS MAPAS</Button>
    </div>
  );
}

const Component5 = ({ armas }) => {
  const classes = useStyles();
  return (
    <div style={{ backgroundImage: 'url("/assets/background.png")', minHeight: 600, padding: 50, display: 'flex', flexDirection: 'column' }}>
      <Typography style={{ fontSize: 36, color: "#FFF" }}>Armas</Typography>
      <div className={classes.boxAgente}>
        {armas.map((arma) => arma.displayIcon && (
          <div className={classes.cardArma}>
            <img alt='' src={arma.displayIcon} height={100} style={{ backgroundColor: '#DC3D4B' }}/>
          </div>
        ))}
      </div>
    </div>
  );
}

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.boxRootAgentes}>
      <div style={{ border: '4px solid #DC3D4B', width: '100%', height: 200, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <div style={{ width: '40%' }}>
          <Typography style={{ fontSize: 22, fontWeight: 500 }}>© Copyright Valorant Media Wiki </Typography>
          <Typography>Valorant Media Wiki é um site não oficial e não endossada pela Riot Games de forma alguma. Riot Games, Valorant e todas as propriedades associadas são marcas comerciais ou marcas registradas da Riot Games, Inc.</Typography>
        </div>
        <div style={{ height: '90%', width: 2, backgroundColor: '#DC3D4B' }}></div>
        <div>
          <Typography style={{ fontSize: 20, fontWeight: 600 }}>Feito por Junior Santos</Typography>
          <div>
            <IconButton>
              <LinkedinIcon style={{ color: '#0e76a8', fontSize: 50 }} />
            </IconButton>
            <IconButton>
              <GitHubIcon style={{ color: '#000', fontSize: 40 }} />
            </IconButton>
            <IconButton>
              <TwitterIcon style={{ color: '#0e76a8', fontSize: 40 }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [agentes, setAgentes] = useState([]);
  const [sprays, setSprays] = useState([]);
  const [mapas, setMapas] = useState([]);
  const [armas, setArmas] = useState([]);

  const getAgentesApi = async () => {
    const { data } = await axios.get('https://valorant-api.com/v1/agents/?language=pt-BR');
    setAgentes(data.data);
  }
  const getSpraysApi = async () => {
    const { data } = await axios.get('https://valorant-api.com/v1/sprays/?language=pt-BR');
    setSprays(data.data);
  }
  const getMapasApi = async () => {
    const { data } = await axios.get('https://valorant-api.com/v1/maps/?language=pt-BR');
    setMapas(data.data);
  }

  const getArmasApi = async () => {
    const { data } = await axios.get('https://valorant-api.com/v1/weapons/?language=pt-BR');
    setArmas(data.data);
  }
  
  useEffect(() => {
    getAgentesApi();
    getSpraysApi();
    getMapasApi();
    getArmasApi();
  }, []);
  return (
    <Fragment>
      <Header />
      <Component1 />
      <Component2 agentes={agentes} />
      <Component3 sprays={sprays}/>
      <Component4 mapas={mapas}/>
      <Component5 armas={armas}/>
      <Footer />
    </Fragment>
  );
}

export default App;
