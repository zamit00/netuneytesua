
  var maslula= document.getElementById("maslul-type");
  var moza=document.getElementById("product");
  function changeka(){
    for(let i=1;i<=3;i++){
        document.getElementById(`thb${i}`).textContent='';
        document.getElementById(`output${i}`).textContent='';
   
        document.getElementById(`thb${i+10}`).textContent='';
        document.getElementById(`output${i+10}`).textContent='';
         document.getElementById(`thb${i+20}`).textContent='';
        document.getElementById(`output${i+20}`).textContent='';
   
    
    }
   }
function specificadd(){
 
 
  var maslul1= document.getElementById("maslul-type1");
  var maslul2= document.getElementById("maslul-type2");

const optionsa = maslul1.querySelectorAll('option');
if(optionsa.length>1){
for (let i = 1; i < optionsa.length; i++) {
  maslul1.removeChild(optionsa[i]);
}
}
  const optionsb = maslul2.querySelectorAll('option');
if(optionsb.length>1){
for (let i = 1; i < optionsb.length; i++) {
  maslul2.removeChild(options[i]);
}
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
        const mozara = row.getElementsByTagName("SUG_KUPA")[0]?.textContent ||  '';
        const shemkupa = row.getElementsByTagName("SHM_KUPA")[0]?.textContent || '';
        const mhkupa = row.getElementsByTagName("ID")[0]?.textContent ||  '';
        const masa = row.getElementsByTagName("HITMAHUT_MISHNIT")[0]?.textContent ||  '';
        const tesuama = row.getElementsByTagName("TSUA_MITZTABERET_LETKUFA")[0]?.textContent ||  '';
       const tesuam36 = row.getElementsByTagName("TSUA_MITZTABERET_36_HODASHIM")[0]?.textContent ||  '';
       const tesuam60 = row.getElementsByTagName("TSUA_MITZTABERET_60_HODASHIM")[0]?.textContent ||  '';


    
        if(Number(yitratnehasim)>0 &&  divuach ==="דווח" &&
        ochlosiyayaad!== "עובדי סקטור מסויים" && ochlosiyayaad!==`עובדי מפעל/גוף מסויים`
         && moza.value && maslula.value!=='' && mozara!=='מטרה אחרת' && Number(tesuama)!==0
        && tesuama){ 

        
        if(mozara===moza.value && masa===maslula.value ) {
          const optiona = document.createElement("option");
          optiona.value = mhkupa;  // value יהיה שם הרכיב
          optiona.textContent = shemkupa;  // textContent יהיה שם הרכיב
          maslul1.appendChild(optiona); 
            
          const optionb = document.createElement("option");
          optionb.value = mhkupa;  // value יהיה שם הרכיב
          optionb.textContent = shemkupa;  // textContent יהיה שם הרכיב
          maslul2.appendChild(optionb); 
              
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
    }
    })
    .catch(error => console.error('Error:', error));
    
    }
