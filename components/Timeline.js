import Link from "next/link";
import styles from '../styles/Home.module.css'



export default function Timeline () {
    return (
        <>
            <h1>
                Timeline
            </h1>
            <div align="left">
                <ul>
                    <li>
                        Int. M.Sc. student at <Link href="https://www.niser.ac.in"><a className={styles.redlink}>NISER, Bhubaneswar</a></Link> [2018 - 2023]
                    </li>
                    <li>
                        Member of <Link href="https://gimbalabs.com"><a className={styles.redlink}>Gimbalabs</a></Link> [2022 - present]
                    </li>
                </ul>
            </div>
        </>
    )
}