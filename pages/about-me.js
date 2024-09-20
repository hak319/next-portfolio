import Layout from "../components/layout";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from "next/router";

export default function AboutMe() {
    const router = useRouter();

    const handleContactClick = () => {
        router.push("mailto:kogisal099@gmail.com");
    };

    return (
        <Layout>
            <Card sx={{ maxWidth: 600, margin: "20px auto" }}>
                {/* <CardMedia
                    component="img"
                    height="300"
                    image="public/logo.jpg"
                    alt="Profile Avatar"
                    sx={{ borderRadius: "50%", width: 150, margin: "20px auto" }}
                /> */}
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" align="center">
                        Hi there, I'm Salkogi07! 👋
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        I'm a passionate developer interested in Unity, Python, Delphi, Arduino, HTML, CSS, and JavaScript. Currently exploring new technologies and expanding my skills!
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center" mt={2}>
                        🌱 I’m currently learning and growing in the field of software development.<br />
                        ⚡ Fun fact: Programming is not just my career, but also my hobby!
                    </Typography>
                    <Typography variant="h6" mt={3} align="center">📫 How to reach me:</Typography>
                    <Button size="small" color="primary" onClick={handleContactClick} sx={{ display: "block", margin: "10px auto" }}>
                        Contact me
                    </Button>

                    <Typography variant="h6" mt={3} align="center">Technologies</Typography>
                    <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                        <a href="https://unity.com/"><img src="https://img.shields.io/badge/-Unity-000?style=flat&logo=unity" alt="Unity Badge" /></a>
                        <a href="https://www.python.org/"><img src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python Badge" /></a>
                        <a href="https://www.embarcadero.com/products/delphi"><img src="https://img.shields.io/badge/-Delphi-ED1F35?style=flat&logo=delphi&logoColor=white" alt="Delphi Badge" /></a>
                        <a href="https://www.arduino.cc/"><img src="https://img.shields.io/badge/-Arduino-00979D?style=flat&logo=arduino&logoColor=white" alt="Arduino Badge" /></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"><img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5 Badge" /></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3 Badge" /></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript Badge" /></a>
                    </div>

                    <Typography variant="h6" mt={3} align="center">Tools</Typography>
                    <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                        <a href="https://code.visualstudio.com/"><img src="https://img.shields.io/badge/-Visual%20Studio%20Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white" alt="VSCode Badge" /></a>
                        <a href="https://www.postman.com/"><img src="https://img.shields.io/badge/-Postman-FF6C37?style=flat&logo=postman&logoColor=white" alt="Postman Badge" /></a>
                        <a href="https://github.com/"><img src="https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub Badge" /></a>
                        <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js Badge" /></a>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => router.push('/projects')}>
                        See My Projects
                    </Button>
                </CardActions>
            </Card>
        </Layout>
    );
}
