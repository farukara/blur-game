import styles from "../styles/LeftPanel.module.css"
import { Box, Typography, Button } from "@mui/material"
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import Divider from '@mui/material/Divider';


export default function LeftPanel ({binoPos, binoSize, clarity, setBinoPos, setBinoSize, setClarity}) {
    return (
    <Box className={styles.main}>
        <Box className={[styles.monocle, styles.stat].join(" ")}>
            <Typography className={styles.def}>Monocle Size</Typography>
            <ImageSearchIcon className={styles.icon}/>
            <Typography className={styles.value}>{binoSize}</Typography>
        </Box>
        <Divider variant="middle" light={true} color="teal"/>
        <Box className={[styles.clarity, styles.stat].join(" ")}>
            <Typography className={styles.def}>Clarity</Typography>
            <LensBlurIcon className={styles.icon}/>
            <Typography className={styles.value}>{clarity}</Typography>
        </Box>
    </Box>

    )
}
