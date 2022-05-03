import { Box, Typography } from "@mui/material"
import styles from '../styles/TopPanel.module.css'

export default function Topbar() {
    return (
    <Box className={styles.main}>
        <Typography variant="h5" className={styles.item}>
        Blur Game
        </Typography>
        <Typography className={styles.item}>
        User Info
        </Typography>
    </Box>
    )
}
