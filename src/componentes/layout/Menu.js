
import {Link} from "react-router-dom"

import styles from "./Menu.module.css"


import { IoIosMenu } from "react-icons/io";
function Menu(){


    return(
        <nav className={styles.menu}>
           <label className={styles.menuHamburger} htmlFor="checkHamburger">
                <IoIosMenu />
            </label>
            <input type="checkbox" id="checkHamburger" className={styles.checkHamburger} />
            <div className={styles.opcoesDoMenu}>
                {/* <div >
                    <Link to="/">Home</Link>
                </div>  */}
            </div >
        </nav>
    )
}

export default Menu;