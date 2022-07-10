import React from "react";
import { Link } from 'react-router-dom'
import {Button} from '@material-ui/core'
function Home() {
    return (
        <div> <h1>HOME</h1>

            <Link to="/lvc/registro">
                <Button variant="contained" component="span">
                    Nova amostra
                </Button>
            </Link>
        </div>

    )
}

export { Home }