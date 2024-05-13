import styles from "./ProductCard.module.scss"

export function ProductCard() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.information}>
          <button className={styles.first}>Игрушка</button>  
          <button className={styles.second}>Мартышка</button>  
          <button className={styles.third}>Мишка</button>  
        </div>
        <p>Длинное название товара в <br/> одну строчку п...</p>
        <div className={styles.price}>
          <h2>от 350 000 ₽</h2>
          <div>
            <h3>450 500 ₽</h3>
            <h4>-10%</h4>
          </div>
        </div>
        <button className={styles.addToBasket}>
          <span>Добавить в корзину</span>  
        </button>
      </div>  
    </>
  )
}
