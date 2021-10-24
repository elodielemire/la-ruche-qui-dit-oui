import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Footer() {
    return <footer className={styles.footer}>
        <p>Created by Elodie Lemire | 2021 | Powered by <a aria-label="Ouvrir le site de Vercel" href="href=https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">Vercel</a> 
            | Challenge by <a aria-label="Ouvrir le site de la ruche qui dit oui" href="https://laruchequiditoui.fr/fr">La ruche qui dit oui | </a>
            <a aria-label="Ouvrir le repo git du challenge" href="https://github.com/lrqdo/technical-test-front-end">Challenge repo | </a>
            <a aria-label="Ouvrir le repo git du site actuel" href="https://github.com/elodielemire/la-ruche-qui-dit-oui">Project repo</a>
        </p>
    </footer>
}

export default Footer;