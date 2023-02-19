  function myFunction() {

                    let campos =document.getElementsByClassName("textRequired")
                   for(i=0;i<campos.length;i++){

                         if (campos[i].value == '') {
                                      campos[i].classList.remove("borderColorGreen");           
                                    campos[i].classList.add("borderColorRed");
                                }
                                else {
                                    campos[i].classList.remove("borderColorRed");
                                   campos[i].classList.add("borderColorGreen");
                                 
                                }
                          if (campos[i].name=='email' && campos[i].value.includes('@')==false){
                                    campos[i].classList.remove("borderColorGreen");           
                                    campos[i].classList.add("borderColorRed");
                          }  
                            if (campos[i].name=='pass' && (campos[i].value!==campos[i+1].value || campos[i].value.length<8)){
                                    campos[i].classList.remove("borderColorGreen");           
                                    campos[i].classList.add("borderColorRed");
                          } 
                                  if (campos[i].name=='confirmPass' campos[i].value.length<8){
                                    campos[i].classList.remove("borderColorGreen");           
                                    campos[i].classList.add("borderColorRed");
                          } 


                     }
  
           
            }