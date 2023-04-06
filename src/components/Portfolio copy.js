import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// MUI Card documentation https://mui.com/material-ui/react-card/

function Portfolio() {

    const projects = [
        {
            id: 1,
            title: "MVC Tech Blog",
            desc: "The purpose of this app is to showcase our understanding of the Model-View-Controller (MVC) architecture.",
            website: "https://mvc-tech-blog-app-production.up.railway.app/",
            github: "https://github.com/Pkrysinski/MVC-Tech-Blog-app",
            img: "mvc-tech-blog-img.jpg",
            alt: "mvc-tech-blog.jpg"
        },
        {
            id: 2,
            title: "Cat Meme Generator",
            desc: "A fun cat meme generator showcasing understanding of 3rd party API's and local storage for historical searches.",
            website: "https://pkrysinski.github.io/cat-meme-generator/",
            github: "https://github.com/Pkrysinski/cat-meme-generator",
            img: "cat-meme-generator-img.jpg",
            alt: "cat-meme-generator-img.jpg"
        },
        {
            id: 3,
            title: "Weather Dashboard App",
            desc: "A recreation of weather.com's 5-day outlook, utilizing API provided by api.openweathermap.org based on city/state/zip search criteria.",
            website: "https://pkrysinski.github.io/weather-dashboard-app/",
            github: "https://github.com/Pkrysinski/weather-dashboard-app",
            img: "weather-dashboard-img.JPG",
            alt: "weather-dashboard-img.JPG"
        },
        {
            id: 4,
            title: "Project 4",
            desc: "",
            website: "",
            github: "",
            img: ""
        },
        {
            id: 5,
            title: "Project 5",
            desc: "",
            website: "",
            github: "",
            img: ""
        },
        {
            id: 6,
            title: "Project 6",
            desc: "",
            website: "",
            github: "",
            img: ""
        }
    ]

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={6} alignItems="center">
                {projects.map(project => {
                    return (
                        <Card sx={{ maxWidth: 345 }} key={project.id}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={project.img}
                                    alt={project.alt}
                                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.desc}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </Stack>
        </Box>
    )
};

export default Portfolio;