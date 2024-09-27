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
                        <p>저는 이은학입니다. 충주상업고등학교 스마트 IT과에 재학중입니다. 프로그램에 능숙하진 않지만, 모델링을 주로 진행합니다.</p>
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