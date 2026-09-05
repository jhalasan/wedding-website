import styles from "./Entourage.module.css";

export function Entourage() {
  return (
    <section id="entourage">
      <div className="section-head">
        <span className="eyebrow">Those Who Stand With Us</span>
        <h2>Wedding Entourage</h2>
        <span className="rule"></span>
      </div>

      <div className={styles.kicker}>
        <span className={styles.family}>Halasan &amp; Ureta</span>
      </div>

      <div className={styles.roleBlock}>
        <h3>Parents</h3>
        <div className={styles.duo}>
          <div className={styles.who}>
            <h4>Parents of the Groom</h4>
            <p>Ar. Ismael Halasan, EUAP</p>
            <p>Mrs. Gina Teresa Halasan</p>
          </div>
          <div className={styles.who}>
            <h4>Parents of the Bride</h4>
            <p>Mr. Arjune Ureta</p>
            <p>Mrs. Annabelle Ureta</p>
          </div>
        </div>
      </div>

      <div className={styles.roleBlock}>
        <h3>Best Man &amp; Maid of Honor</h3>
        <div className={styles.duo}>
          <div className={styles.who}>
            <h4>Best Man</h4>
            <p>Mr. Jay Bee Halasan</p>
          </div>
          <div className={styles.who}>
            <h4>Maid of Honor</h4>
            <p>Ms. Estelle Glaze Racines</p>
          </div>
        </div>
      </div>

      <div className={styles.roleBlock}>
        <h3>Groomsmen &amp; Bridesmaids</h3>
        <div className={`${styles.nameGrid} ${styles.cols2}`}>
          <p>Junjie Ureta</p>
          <p>Sophia Nicole Calumpang</p>
          <p>Dennis Anton Halasan</p>
          <p>Adrianne Ponsaran</p>
          <p>Justine Ryan Calumpang</p>
          <p>Marchellen Israel</p>
          <p>Ree Ismael Halasan</p>
          <p>Leila Ysabel Publico</p>
          <p>Kenneth Adrian Calumpang</p>
          <p>Hannah Katrina Tancio</p>
        </div>
      </div>

      <div className={styles.roleBlock}>
        <h3>Flower Girls &amp; Bearers</h3>
        <span className={styles.caption}>
          Carrying flowers of prosperity, and the symbols of faith, love &amp; treasure
        </span>
        <div className={styles.duo}>
          <div className={styles.who}>
            <h4>Flower Girls</h4>
            <p>Zyra Bernice Lanticse</p>
            <p>Calla Phyllis Halasan</p>
            <p>Zarri Shane Navalta</p>
          </div>
          <div className={styles.who}>
            <h4>Bible Bearer</h4>
            <p>Ezekiel Ivan Halasan</p>
          </div>
          <div className={styles.who}>
            <h4>Ring Bearer</h4>
            <p>John Adham Ureta</p>
          </div>
          <div className={styles.who}>
            <h4>Coin Bearer</h4>
            <p>Kaire Angelo Navalta</p>
          </div>
        </div>
      </div>

      <div className={styles.roleBlock}>
        <h3>Secondary Sponsors</h3>
        <div className={styles.duo}>
          <div className={styles.who}>
            <h4>Veil</h4>
            <p>Engr. Ivan Ismael Halasan</p>
            <p>Mrs. Risen Faith Halasan</p>
          </div>
          <div className={styles.who}>
            <h4>Cord</h4>
            <p>Mr. Albhy Ureta</p>
            <p>Mrs. Marilyn Ureta</p>
          </div>
          <div className={styles.who}>
            <h4>Candle</h4>
            <p>Mr. Lenard Paul Halasan</p>
            <p>Mrs. Trixy Ann Halasan</p>
          </div>
        </div>
      </div>

      <div className={styles.roleBlock}>
        <h3>Principal Sponsors</h3>
        <span className={styles.caption}>To stand as witnesses as we exchange our vows</span>
        <div className={styles.pairGrid}>
          <p className={styles.pair}>Mr. Adriano Ponsaran &amp; Mrs. Genelilyn Ponsaran</p>
          <p className={styles.pair}>Mr. Ryan Guinieta &amp; Mrs. Monica Guinieta</p>
          <p className={styles.pair}>Mr. Gerardo Marcelino &amp; Mrs. May Quiocho</p>
          <p className={styles.pair}>Mr. Lowell Suba &amp; Mrs. Manilyn Suba</p>
          <p className={styles.pair}>Mr. Angelito Cardinal &amp; Mrs. Veronica Cardinal</p>
          <p className={styles.pair}>Mr. Eduardo Galacgac &amp; Mrs. Juvy Torejos</p>
          <p className={styles.pair}>Mr. Estilito Halasan Jr. &amp; Mrs. Amy Halasan</p>
          <p className={styles.pair}>Engr. Reque Diodina &amp; Mrs. Bregida Diodina</p>
          <p className={styles.pair}>Mr. Ildefonso Halasan &amp; Mrs. Leonilla Halasan</p>
          <p className={styles.pair}>Mr. Robert Calumpang &amp; Mrs. Marissa Calumpang</p>
          <p className={styles.pair}>Mr. Wilfredo Amemensi &amp; Mrs. Esmeralda Amemensi</p>
          <p className={styles.pair}>Mr. Rodolfo Jazul Jr. &amp; Mrs. Ernanita Jazul</p>
          <p className={styles.pair}>Engr. Nelson Marasigan &amp; Mrs. Ellen L. Marasigan</p>
          <p className={styles.pair}>Mr. Rogelio Jamero &amp; Mrs. Raquel Jamero</p>
          <p className={styles.pair}>Mr. John Ray Bass &amp; Mrs. Meilah Rose Bass</p>
          <p className={styles.pair}>Mr. Aniceto Ureta Solis Jr. &amp; Engr. Noramie Pila</p>
          <p className={styles.pair}>Mr. Jose Ureta Alvarez Jr. &amp; Mrs. Genoveva Calumpang</p>
          <p className={styles.pair}>Mrs. Arlene Yangan &amp; Ms. Nelda Ureta</p>
        </div>
      </div>
    </section>
  );
}
