import React from "react";
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import "./styles.css"
function Home() {
    return (
        <div> <h1>HOME</h1>

            <Link style= {{textDecoration:'none'}} to="/lvc/registro">
                <Button style={{ backgroundColor: "#024d36" }} variant="dark" bg="lg">
                    Nova amostra
                </Button>
            </Link>
        </div>

    )
}

export { Home }