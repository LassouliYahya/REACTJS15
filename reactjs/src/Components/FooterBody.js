import React from 'react'
import Iframe from 'react-iframe'

export default function FooterBody() {
    return (
        <div style={{ padding:50 }}>
             <center>
                <h3 style={{ color: "#9f9595", fontFamily: "Arial" ,paddingTop:50 }}> <strong>Rendez-Nous Visite</strong> </h3>
             </center>  
            
             <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1503.695016549234!2d-9.533832213310541!3d30.399043928094635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6c7f3e50ee43f4c1!2sGEEK%20Maroc%20-%20Agadir!5e0!3m2!1sfr!2sma!4v1602086476943!5m2!1sfr!2sma" 
             width="400" height="350" display="inline" 
             frameBorder="0" style="border:0;" 
             allowFullScreen=""
             aria-hidden="false" tabIndex="0">
              </Iframe>

              <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13292.607910368175!2d-7.631733!3d33.601361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4266759c7cfb4711!2sGEEK%20Maroc%20-%20Casablanca!5e0!3m2!1sfr!2sma!4v1602087265239!5m2!1sfr!2sma" 
             width="400" height="350" display="inline" 
             frameBorder="0" style="border:0;" 
             allowFullScreen=""
             aria-hidden="false" tabIndex="0">
              </Iframe>
           
        </div>
    )
}
