import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Portfolio() {

    const projects = [
        {
            id: 1,
            title: "MVC Tech Blog",
            desc: "The purpose of this app is to showcase our understanding of the Model-View-Controller (MVC) architecture.",
            website: "https://mvc-tech-blog-app-production.up.railway.app/",
            github: "https://github.com/Pkrysinski/MVC-Tech-Blog-app",
            img: "/mvc-tech-blog-img.jpg", //TODO: Image won't load, only the alt text.
            alt: "mvc-tech-blog.jpg"
        },
        {
            id: 2,
            title: "Project 2",
            desc: "",
            website: "",
            github: "",
            img: ""
        },
        {
            id: 3,
            title: "Project 3",
            desc: "",
            website: "",
            github: "",
            img: ""
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
        <section id="portfolio" style={{ backgroundColor: "#ffe9ec", color: "black" }}>
            <div>
                <div style={{ display: "flex", border: "2px solid grey", justifyContent:"space-between" }}>
                    {projects.map(project => {
                        return (
                            <Card sx={{ maxWidth: 345 }} key={project.id}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={project.img}
                                        alt={project.alt}
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
                </div>
            </div>
        </section>
    )
};

export default Portfolio;