import styles from "../styles/LeftPanel.module.css";
import { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Autocomplete } from "@mui/material";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import Divider from '@mui/material/Divider';
import { createFilterOptions } from '@mui/material/Autocomplete';



export default function LeftPanel ({binoPos, binoSize, clarity, setBinoPos, setBinoSize, setClarity}) {
    const [text, setText] = useState("")
    const [words, setWords] = useState(() => getWords()) //all the available words dict
    const [target, setTarget] = useState(() => getTarget()) //target word list
    const [special, setSpecial] = useState(() => getSpecial()) //target word list
    const [guessList, setGuessList] = useState([]) //words that are already been guessed

    async function getWords() {
        const resp = await fetch("../static/words.json")
        const data = await resp.json()
        setWords(data)
    }
    async function getTarget() {
        const resp = await fetch("../static/target-1.json")
        const data = await resp.json()
        setTarget(data)
    }
    async function getSpecial() {
        const resp = await fetch("../static/special-1.json")
        const data = await resp.json()
        setSpecial(data)
    }

    useEffect(() => {
        console.log(words)
    },[words])

    function handleSubmit(e) {
        e.preventDefault()
        console.log(special)
        if (guessList.includes(text.trim())) {
            console.log("you've already made that guess before")
        } else if (special.includes(text.trim())) {
            setGuessList([[text.trim(), true], ...guessList])
            console.log("it's in special")
            setClarity(clarity-10)
            console.log("clarity increased by 10")
        } else if (target.includes(text.trim())) {
            setGuessList([[text.trim(), true], ...guessList])
            console.log("it's in target")
            setBinoSize(binoSize+10)
            console.log("monocle size increased by 10")
        } else {
            setGuessList([[text.trim(), false], ...guessList])
        }
        console.log("submitted", text.trim())
        console.log("guesses: ", guessList)
        setText("")
    }

    const filterOptions = createFilterOptions({
        limit: 20,
        trim: true,
    });

    return (
    <Box className={styles.main}>
        <form onSubmit={handleSubmit}>
            <Autocomplete
                filterOptions={filterOptions}
                disablePortal
                id="autocomplete"
                options={words}
                sx={{ 
                    width: 300 
                }}
                renderInput={(params) => <TextField {...params} label="Enter Item" 
                    name="text"
                    value= {text}
                    onChange= {(e) => setText(e.target.value.toLowerCase())}
                    className={styles.textfield} 
                    size="medium" 
                    variant="outlined" 
                    color='secondary'
                    helperText="Keyboard shortcut: Tab"
                    margin="normal"
                    fullWidth
                    sx = {{
                        input: {
                            color: "#ddd",
                        }
                    }}
                    InputLabelProps={{style : {color : '#ddd'} }}
                    FormHelperTextProps={{style : {color : '#999'} }}
                    />}
            />
        </form>
        <Box>
        <Typography style = {{color: "dodgerblue"}}>Guess List</Typography>
        {guessList.map((w,i) => {
            console.log(w,i)
            return (
                <Typography 
                    key={w[0]}
                    style={{
                        textDecoration: w[1] ? "" : "line-through",
                        color : w[1] ? "green" : "red",
                    }}
                >
                    {w[0]}
                </Typography>
            )
        })}
        </Box>
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
