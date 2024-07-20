import Button from "./Button"

export default function AboutPartners() {
    return <section class='about-partners-container'>

                <div class='about-partners-content'>
                    <h2 className='about-partners-header'>JAKOŚĆ i BOGACTWO ZIEMI
                    POMORZA ZACHODNIEGO</h2>
                    <p className='about-partners-text'>Ziemia w zachodniopomorskim to prawdziwy skarb dla uprawy ziemniaków! Dzięki bogatej glebie, odpowiedniej wilgotności i sprzyjającemu klimatowi, ziemniaki rosną tu zdrowe i pyszne. <span className="about-partners-text--highlighted">Krajowy Ośrodek Wsparcia Rolnictwa </span>wspiera rolników, organizując szkolenia i doradztwo, aby pomóc im osiągać najlepsze wyniki. 
                    <br></br><br></br>Do tego firma <span className="about-partners-text--highlighted">Europlant</span> dostarcza najwyższej jakości nasiona, idealnie dopasowane do lokalnych warunków. Wspólne działania KOWR i Europlant sprawiają, że uprawa ziemniaków w zachodniopomorskim to czysta przyjemność i gwarancja sukcesu!</p>
                    <div className="about-partners-button-container">
                  
                        <a href='https://www.gov.pl/web/kowr' target='_blank' class="button button__menu button--yellow button--medium">CZYTAJ O KOWR</a>
                        <a href='https://www.europlant.biz/pl/home/' target='_blank' class="button button__menu button--yellow button--medium">CZYTAJ O EUROPLANT</a>
                    </div>

                </div>

   
                <div class='about-partners-img-section'>
                    <img className='about-partners-img' src='./img-partners-shape.png'></img>

                </div>
                


    </section>
}