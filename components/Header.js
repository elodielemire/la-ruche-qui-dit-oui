import styles from '../styles/Home.module.css'

function Header() {
    return <div className={styles.header}>
        <img className={styles.header__img} src="https://thefoodassembly.com/fr/p/assets/images/homepage-basket/basket-summer-fr-FR-0221.svg" />
        <h1 className={styles.header__title}>
            <a href='/' aria-label="Retour à la page d'acceuil">Moteur de recherche Open Food Facts</a>
        </h1>
    </div>
}

export default Header;