import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Contact () {
    return (
        <>
            <h1>
                Contact
            </h1>
          
            <ul>
                <li>
                    E-mail : nelson.kshetrimayum@niser.ac.in
                </li>
                <li>
                    Personal e-mail : nelsonksh2021@gmail.com
                </li>
                <li>
                    Discord : nelsonksh#1675
                </li>
            </ul>

            <span className={styles.logo}>
                <a href="https://github.com/nelson-ksh">
                    <Image src="/icons8-github.svg" alt="Github Logo" width={40} height={40} />
                </a>
                <a href="#">
                    <Image src="/icons8-gitlab.svg" alt="Gitlab Logo" width={40} height={40} />
                </a>
            </span>

        </>
    )
}