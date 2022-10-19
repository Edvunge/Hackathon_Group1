import { useRouter } from "next/router";
import styles from "../../styles/navBar.module.css"
import Buttons from "./button";

//this component purpose is to be the banner for the index.js page

export function MainNavBar() {

    const mainNavBarItems = [
        {
            label: "Settings",
            path: "/settings"
        },
        {
            label: "About",
            path: "/about"
        }
    ]

    return (

        <div>

            <nav className={styles.nav}>

                <div className={styles.logo}>
                    <p>logo</p>
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