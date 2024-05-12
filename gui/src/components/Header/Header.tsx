import styles from "./styles.module.scss"
import img from "../../assets/React.png"
import pin from "../../assets/pin.svg"
import find from "../../assets/find.svg"
import basket from "../../assets/basket.svg"
import picture from "../../assets/ebalo.png"

export function Header() {
  return (
    <>
      <nav className={styles.nav}>
        <a href="/">
          <img src={img} alt="logo"/>  
        </a>
          <img src={pin} alt="pin"/>
          <p className={styles.map}>Александровск-Са...</p>
          <div className={styles.search}>
              <input type="search" placeholder="Поиск бренда, товара, категории..."/>
              <button>
                <img src={find} alt="find"/>  
              </button>
          </div>
          <div className={styles.basket}>
            <div className={styles.item}>
              <img src={basket} alt="basket"/>  
            </div>
          </div>
          <div className={styles.pic}>
            <img src={picture} alt="pic"/>  
          </div>
      </nav>
    </>
  )
}
