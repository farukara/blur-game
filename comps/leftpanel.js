import styles from "../styles/LeftPanel.module.css";
import { useState } from 'react';
import { Box, Typography, Button, TextField } from "@mui/material";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import Divider from '@mui/material/Divider';


export default function LeftPanel ({binoPos, binoSize, clarity, setBinoPos, setBinoSize, setClarity}) {
    const [text, setText] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        console.log("submitted", text)
    }
    return (
    <Box className={styles.main}>
        <form onSubmit={handleSubmit}>
        <TextField 
            name="text"
            value= {text}
            onChange= {(e) => setText(e.target.value)}
            className={styles.textfield} 
            size="medium" 
            variant="outlined" 
            color='secondary'
            label="Enter item name"
            helperText="Keyboard shortcut: '/'"
            margin="normal"
            fullWidth
            sx = {{
                input: {
                    color: "#ddd",
                }
            }}
            InputLabelProps={{style : {color : '#ddd'} }}
            FormHelperTextProps={{style : {color : '#999'} }}
        />
        </form>
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
