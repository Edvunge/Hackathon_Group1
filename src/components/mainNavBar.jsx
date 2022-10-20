import { useRouter } from "next/router";
import styles from "../../styles/navBar.module.css"
import Buttons from "./button";

//this component purpose is to be the banner for the index.js page

export function MainNavBar() {

    const mainNavBarItems = [
        {
            label: "Statistics",
            path: "/statistics"
        },
        {
            label: "About",
            path: "/about"
        },
        {
            label: "Login",
            path: "/about"
        }

    ]

    return (

        <div>

            <nav className={styles.nav}>

                <div className={styles.logo}>
                    <img src="logo.png"></img>
                </div>

                <div className={styles.text}>
                    {
                        mainNavBarItems.map(n => <NavRoutes key={n.label} {...n} />)
                    }
                </div>

            </nav>

        </div>
    )

}

function NavRoutes({ path, label }) {

    const router = useRouter()

    const handleClick = (e) => {

        e.preventDefault()
        router.push(path)

    }

    return (

        <span href={path} onClick={handleClick}>
            {label}
        </span>

    )
}