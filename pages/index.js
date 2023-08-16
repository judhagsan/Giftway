import styles from "..styles/style.css";

function Home() {
  return (
    <header>
      <div className={styles.nav}>
        <img src="imgs/logo.png" class="logo" alt="Logo Giftway" />
        <a> comercial@giftway.com.br | (11) 4324 - 6999 | (11) 94567 - 8188 </a>
      </div>
    </header>
  );
}

export default Home;
