import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStylesCard = makeStyles({
    root: {
        maxWidth: 345,
        height: 310
    },
    media: {
        height: 140,
    },
});

const useStylesBtn = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export function GamePreview({ game, addGame }) {

    const classesBtn = useStylesBtn();
    const classesCard = useStylesCard();
    return (
        <section className="game-card-preview">
            <Card className={classesCard.root}>
                <CardActionArea>
                    <CardMedia
                        className={classesCard.media}
                        image={game.background_image}
                    />
                    <CardContent>
                        <h1>{game.slug.toUpperCase()}</h1>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div className={classesBtn.root}>
                        <Button onClick={()=>addGame({...game})} size="large" variant="contained" color="secondary">
                            הוסף
                        </Button>
                    </div>
                    <div className={classesBtn.root}>
                        <Button size="large" variant="contained" color="primary">
                            פרטים
                        </Button>
                    </div>

                </CardActions>
            </Card >
        </section>
    )
}
