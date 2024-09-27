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
                        준비중...
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center" mt={2}>
                        
                    </Typography>
                    <Button size="small" color="primary" onClick={handleContactClick} sx={{ display: "block", margin: "10px auto" }}>
                  
                    </Button>

                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </Layout>
    );
}
