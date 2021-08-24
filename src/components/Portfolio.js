import React, {useState} from 'react'
import {portfolio } from '../datalist';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 450,
    },
  });

function Portfolio() {

    const [max, setMax] = useState(4)

    const classes = useStyles();

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }

    const changeMax = () => {
        if(max<20){
            setMax(max+4)
        }  
    }

    const randPort = shuffleArray(portfolio)
    const featuredPort = randPort.slice(0,max)
    
    return (
        <>
        <div className="portDiv" id="portfolio">
            <div>
            <h1 className="headText" style={{textAlign: "center", padding:"30px 10px"}}>SOME OF MY WORKS</h1>
            <div className="portInnerDiv">
                {featuredPort.map(item => {
                    return (
                        <div key={item.id}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt={item.name}
                                    className="fader"
                                    image={item.cover}
                                    title={item.name}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" className="topFader">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="fader">
                                        {item.details.substr(0,120) + "..."} 
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="bottomFader">
                                    <Link to={`/portfolio/${item.id}`}>
                                        <Button size="small" color="secondary" variant="contained" style={{textDecoration: 'none'}} className="learnBtn">
                                            Learn More
                                        </Button>
                                    </Link>
                                    <Button size="small" color="primary" variant="contained">
                                    <a href={item.link} target="_blank" rel="noreferrer" className="visitBtn">Visit Site</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    )
                })}
            </div>
            {
                max<20? (
                    <div style={{marginTop: "20px", textAlign: "center"}}>
                        <Button onClick={changeMax} style={{background: "#000", color: "white", fontWeight: "bold"}} size="large" variant="contained" >Load More Projects</Button>
                    </div>
                ) : null
            }
            
            </div>
        </div>
        
        </>
    )
}

export default Portfolio
