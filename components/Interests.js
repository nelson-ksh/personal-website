import Link from "next/link";
import styles from '../styles/Home.module.css'


export default function Interests () {
    return (
        <>
            <h1>
                My works and interests
            </h1>
            <div align="left">
                <ul>
                    <li>
                        An aspiring Smart Contracts developer on cardano blockchain. Currently enrolled in <Link href="https://gimbalabs.instructure.com/enroll/3CFNFB" passHref><a class={styles.redlink}><i>Plutus Project Based Learning</i></a></Link> provided by <a href="https://gimbalabs.com">gimbalabs</a>.
                    </li>
                    <li>
                        Studying cosmology.
                    </li>
                    <li>
                        <Link href="/large-scale-structures.html" passHref><a class={styles.redlink}>Astro report</a></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}