import { useRouter } from "next/router";
import styles from "../../styles/navBar.module.css"
import abc from "./stats";

//this component purpose is to be the banner for the index.js page

export function Statistics() {

    const statistics = [
        {
            label: "Today",
            path: "/today"
        },
        {
            label: "Week",
            path: "/week"
        },
        {
            label: "Month",
            path: "/month"
        }
    ]

    return (

        <div>

            <nav className={styles.nav}>


                <div className={styles.textos}>
                    {
                        statistics.map(n => <NavRoutes key={n.label} {...n} />)
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