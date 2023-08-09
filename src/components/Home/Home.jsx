import classes from './Home.module.css'
import PrevCard from './PrevCard/PrevCard'
import { useState } from 'react'
import FullPage from './FullPage/FullPage'

const Home = () => {
    let [showFull, isShow] = useState(false);
    const show = () => isShow(true);
    // const hidden = () => isShow(false);
    return (
        <main className={classes.main}>
            <div className={classes.home__wrapper}>
                <PrevCard  show={show}/>
               {showFull &&  <FullPage />}
            </div>
        </main>
    )
}

export default Home