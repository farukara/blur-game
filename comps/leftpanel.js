import styles from "../styles/LeftPanel.module.css"
import { Box, Typography, Button } from "@mui/material"

export default function LeftPanel ({binoPos, binoSize, clarity, setBinoPos, setBinoSize, setClarity}) {
    return (
    <Box>
        <Typography >binoX:{binoPos.x}</Typography><br/>
        <Typography >binoY:{binoPos.y}</Typography><br/>
        <Typography >binoSize:{binoSize}</Typography><br/>
        <Typography >clarity:{clarity}</Typography><br/>
        <Button 
            className={styles.button}
            variant="contained"
            onClick={() => setClarity(clarity-5)}>Reduce clarity by 5</Button>
        <Button 
            className={styles.button}
            variant="contained"
            onClick={() => setBinoSize(binoSize+200)}>Inc size by 100</Button>
    </Box>

    )
}
