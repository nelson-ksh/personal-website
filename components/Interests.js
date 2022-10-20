import Link from "next/link";
import styles from '../styles/Home.module.css'


export default function Interests () {
    return (
        <>
            <h1>
                My works and interests
            </h1>
            <div align="left">
                <h2>Present</h2>
                <ul>
                    <li>
                        Contributing on building <b><i>Gimbals Bounty Treasury Escrow (GBTE)</i></b> at Gimbalabs.
                    </li>
                    <li>
                        A project on seperating Cosmic Dust emissions from <i><b>Cosmic Infrared Background (CIB)</b></i> data.
                    </li>
                    <li>
                        A reading project on the formation of <i><b>Large Scale Structures</b></i> in the Universe.
                    </li>
                    {/* <li>
                        &lt;Project placeholder&gt;
                    </li> */}
                    {/* <li>
                        <Link href="/large-scale-structures.html" passHref><a className={styles.redlink}>&lt;Astro project placeholder&gt;</a></Link>
                    </li> */}
                </ul>
                <h2>Past</h2>
                <ul>
                    <li>
                        <h3>Cardano Development</h3>
                        <ul>
                            <li>
                                Completed <Link href="https://gimbalabs.com/mastery-policy" passHref><a><i><b>Plutus Project Based Learning</b></i></a></Link> course provided by <Link href="https://gimbalabs.com" passHref><a className={styles.redlink}><i>Gimbalabs</i></a></Link>
                                 {/* - <Link href="#" passHref><a class={styles.bluelink}><b>Certification NFT</b></a></Link> */}
                                 .
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>Academics</h3>
                        <ul>
                            <li>
                                <i><b>Denoising of Hyperspectral Images of the moon (IIRS data)</b></i>, under the guidance of <Link href="https://scholar.google.com/citations?user=ilANSnwAAAAJ" passHref><a className={styles.redlink}>Dr. Guneshwar Thangjam</a></Link> [2022]
                            </li>
                            <li>
                                <i><b>Study of temperature anisotropy of Cosmic Microwave Background</b></i>, under the guidance of <Link href="https://scholar.google.com/citations?user=UA_easYAAAAJ" passHref><a className={styles.redlink}>Dr. Tuhin Ghosh</a></Link> [2021]
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </>
    )
}