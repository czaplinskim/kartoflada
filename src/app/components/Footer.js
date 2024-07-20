import FooterShape from "./svg/FooterShape"

export default function Footer() {
    return <footer className="footer">
        <FooterShape></FooterShape>
        <div className="footer__inner">
            <div class="footer__info">
                <h6 class="footer__header">
                ORGANIZATOREM KARTOFLADY JEST CENTRUM KULTURY W MIELNIE
                </h6>

                <p class="footer__paragraph">

                    ul. Generała Stanisława Maczka 44 <br></br>
                    76-032 Mielno (siedziba tymczasowa)  <br></br>
                    kontakt@ckm.mielno.pl  <br></br>

                </p>
            </div>

            <div class="footer_page_info">
                <a href="#"><span class="footer_page_info__span footer_page_info__span--one">POLITYKA PRYWATNOŚCI</span></a>
                <span class="footer_page_info__span footer_page_info__span--two">2023 © Centrum kultury w Mielnie</span>


            </div>
        </div>
    </footer>
}