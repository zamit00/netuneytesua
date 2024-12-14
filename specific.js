function specificadd(){
 changek();
  var maslul1= document.getElementById("maslul-type1");
  var maslul2= document.getElementById("maslul-type2");

const optionsa = maslul1.querySelectorAll('option');
for (let i = 1; i < optionsa.length; i++) {
  maslul1.removeChild(optionsa[i]);
}
  const optionsb = maslul2.querySelectorAll('option');
for (let i = 1; i < optionsb.length; i++) {
  maslul2.removeChild(options[i]);
}
 
 fetch('kupotKlali.xml')
    .then(response => response.text()) // מקבל את תוכן הקובץ כטקסט
    .then(xmlString => {
        const parser = new DOMParser(); // יוצר parser לניתוח XML
        const xmlDoc = parser.parseFromString(xmlString, "application/xml"); // מנתח את הטקסט למבנה XML
   

const rows = xmlDoc.getElementsByTagName("Row");
let optionCollection = [];
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        
        
        
        const yitratnehasim = row.getElementsByTagName("YITRAT_NCHASIM_LSOF_TKUFA")[0]?.textContent || '';
        const divuach=  row.getElementsByTagName("MATZAV_DIVUACH")[0]?.textContent ||  '';
        const ochlosiyayaad=row.getElementsByTagName("UCHLUSIYAT_YAAD")[0]?.textContent ||  '';
        const mozar = row.getElementsByTagName("SUG_KUPA")[0]?.textContent ||  '';
        const shemkupa = row.getElementsByTagName("SHM_KUPA")[0]?.textContent || '';
        const mhkupa = row.getElementsByTagName("ID")[0]?.textContent ||  '';
        const mas = row.getElementsByTagName("HITMAHUT_MISHNIT")[0]?.textContent ||  '';
        const tesuam = row.getElementsByTagName("TSUA_MITZTABERET_LETKUFA")[0]?.textContent ||  '';
       const tesuam36 = row.getElementsByTagName("TSUA_MITZTABERET_36_HODASHIM")[0]?.textContent ||  '';
       const tesuam60 = row.getElementsByTagName("TSUA_MITZTABERET_60_HODASHIM")[0]?.textContent ||  '';


     
        if(Number(yitratnehasim)>0 &&  divuach ==="דווח" &&
        ochlosiyayaad!== "עובדי סקטור מסויים" && ochlosiyayaad!==`עובדי מפעל/גוף מסויים`
         && moz.value && maslul.value!=='' && mozar!=='מטרה אחרת' && Number(tesuam)!==0
        && tesuam){

        
        if(mozar===moz.value && mas===maslul.value ) {
            optionCollection.push({mh:mhkupa, shemkupa: shemkupa,mozar:mozar, tesuam: Number(tesuam), 
              ochlosiyayaad: ochlosiyayaad, divuach: divuach, tesuam36:Number(tesuam36),tesuam60:Number(tesuam60) });
          }
        }
      }
      
    
     
      if(optionCollection.length!==0){
      for(let r=0;r<=optionCollection.length;r++){
        const option = document.createElement("option");
        option.value = optionCollection.mh;  // value יהיה שם הרכיב
        option.textContent = optionCollection.shemkupa;  // textContent יהיה שם הרכיב
         maslul1.appendChild(option);
        
        const option2 = document.createElement("option");
        option2.value = optionCollection.mh;  // value יהיה שם הרכיב
        option2.textContent = optionCollection.shemkupa;  // textContent יהיה שם הרכיב
         maslul2.appendChild(option);
    }
    })
    .catch(error => console.error('Error:', error));
    
    }
