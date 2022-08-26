import Link from "next/link";

export default function Interests () {
    return (
        <>
            <h1>
                My works and interests
            </h1>
            <div align="left">
                <ul>
                    <li>
                        An aspiring Smart Contracts developer on cardano blockchain. Currently enrolled in <i>Plutus Project Based Learning</i> provided by <a href="https://gimbalabs.com">gimbalabs</a>.
                    </li>
                    <li>
                        Studying cosmology.
                    </li>
                    <li>
                        Astro report - <font color="blue"><Link href="/large-scale-structures.html">link</Link></font>
                    </li>
                </ul>
            </div>
        </>
    )
}