import React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Portfolio() {

    const projects = [
        { id: 1, title: "Project 1", desc: "", website: "", github: "", img: "" },
        { id: 2, title: "Project 2", desc: "", website: "", github: "", img: "" },
        { id: 3, title: "Project 3", desc: "", website: "", github: "", img: "" },
        { id: 4, title: "Project 4", desc: "", website: "", github: "", img: "" },
        { id: 5, title: "Project 5", desc: "", website: "", github: "", img: "" },
        { id: 6, title: "Project 6", desc: "", website: "", github: "", img: "" }
    ]

    return (
        <section id="portfolio" style={{ backgroundColor: "#ffe9ec", color: "black" }}>
            <div>
                <h1>
                    Here is my portfolio
                </h1>
                <div style={{ display: "flex", border: "2px solid grey" }}>
                    {projects.map(project => {
                        return (
                            <Card style={{ width: "18em" }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="h5" component="div">

                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} >

                                    </Typography>
                                    <Typography variant="body2">

                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};

export default Portfolio;