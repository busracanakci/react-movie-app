import Bilet from "./Bilet";


export default function Payment() {
    const refreshPage = ()=>{
        alert('Bilet Satın Alındı !')
        window.location.reload();
     }
    return(
        
        <form className="form">
            <h2>Ödeme Sayfası</h2>
            <div className="information">
                <h3>Kişisel Bilgiler</h3>
                <div className="name-margin">
                    <div>
                    <label  htmlFor="name">İsim : </label>
                    <input  id="name" name="name" type="text" />
                    </div>
                   <div>
                   <label  htmlFor="surname">Soyisim : </label>
                    <input  id="surname" name="surname" type="text" />
                   </div>
                    
                </div>
                <div  className="name-margin">
                    <div>
                    <label  htmlFor="email">Email : </label>
                  <input  id="email" name="surname" type="text" />
                    </div>
                    <div>
                    <label  htmlFor="phone">Telefon : </label>
                  <input  id="phone" name="phone" type="phone" />
                    </div>
                  
                 
                </div>
              
              
            </div>
            <div className="information">
                <h3>Kart Bilgileri</h3>
                <div className="name-margin">
                    <div>
                    <label htmlFor="cardname">Kart Üzerindeki İsim : </label>
                    <input id="cardname" name="cardname"/>
                    </div>
                   <div>
                   <label htmlFor="cardnumber">Kredi Kartı No : </label>
                    <input id="cardnumber" name="cardnumber"/>
                   </div>
                    
                </div>
                <div className="name-margin">
                    <div>
                    <label  htmlFor="enddate">Son Kullanma Tarihi : </label>
                    <input  id="enddate" name="enddate"/>
                    </div>
                    <div>
                    <label htmlFor="cvc">Kredi Kartı No : </label>
                    <input id="cvc" name="cvc"/>
                    </div>

                    
                    
                </div>
                <div className="name-margin">
                    <label htmlFor="total">Tutar :</label>
                    <span className="total" name="total">
                    
                    </span>
                </div>
            </div>
        <button className="payment" onClick={refreshPage}>Satın Al</button>
      </form>
    )
}