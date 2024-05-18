import styles from "./Footer.module.scss"
import logo from "../../assets/React.png"
import facebook from "../../assets/Facebook.svg"
import instagram from "../../assets/Insta.svg"
import vk from "../../assets/VK.svg"
import play from "../../assets/GooglePlay.svg"
import apple from "../../assets/AppStore.svg"

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.upperContent}>
           <img src={logo} alt="logo"/>
           <div className={styles.content}>
             <div className={styles.join}>
             <p>Присоединяйтесь к нам penis</p>
             <div className={styles.society}>
               <img src={facebook} alt="facebook"/>
               <img src={instagram} alt="facebook"/>  
               <img src={vk} alt="facebook"/>  
             </div>
           </div>
           <div className={styles.download}> 
             <p>Устанавливайте приложение</p>
             <div className={styles.shops}>
               <img src={play} alt="google-play"/>
               <img src={apple} alt="google-play"/>
              </div>
           </div>
           </div>
        </div>
                <div className={styles.lowerContent}>
            <p>© Sionic</p> 
            <p>Правовая информация</p>
            <p>Политика конфиденциальности</p>
        </div>

      </footer>  
    </>
  )
}
