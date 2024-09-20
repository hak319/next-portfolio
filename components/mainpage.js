import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Lottie from "react-lottie-player";
import lottiejson from '/public/mainpage.json';
import styles from "./mainpage.module.css";
import { useRouter } from "next/router";

export default function MainPage() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/projects');
    };

    return (
        <div>
            <Grid container spacing={10}>
                <Grid size={4}>
                    <div className={styles.introduce}>
                        <h2 style={{fontSize: '39px'}}>안녕하세요!</h2>
                        <p>저는 김동우입니다. 나이는 고등학교 2학년이고, 충주상업고등학교 스마트 IT과에 재학중입니다. 제가 할 수 있는 프로그래밍 언어에는 C#, 파이썬, 자바스크립트가 있습니다.</p>
                        <Button variant="contained" onClick={handleClick}>프로젝트 보러가기</Button>
                    </div>
                </Grid>
                <Grid size={7}>
                    <div>
                        <Lottie
                            loop
                            animationData={lottiejson}
                            play

                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}