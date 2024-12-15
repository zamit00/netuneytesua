document.addEventListener("DOMContentLoaded", function() {
    // הגדרת האוספים כמשתנים גלובליים
    window.optionCollection = [];
    window.optionCollection2 = [];

    // פונקציה לעיבוד קובץ ראשון (kupotKlali.xml)
    function processKupotKlali(xmlString) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "application/xml");
        
        const rows1 = xmlDoc.getElementsByTagName("Row");
        for (let i = 0; i < rows1.length; i++) {
            const row = rows1[i];
            const yitratnehasim = row.getElementsByTagName("YITRAT_NCHASIM_LSOF_TKUFA")[0]?.textContent || '';
            const divuach = row.getElementsByTagName("MATZAV_DIVUACH")[0]?.textContent || '';
            const ochlosiyayaad = row.getElementsByTagName("UCHLUSIYAT_YAAD")[0]?.textContent || '';
            const mozar = row.getElementsByTagName("SUG_KUPA")[0]?.textContent || '';
            const shemkupa = row.getElementsByTagName("SHM_KUPA")[0]?.textContent || '';
            const mhkupa = row.getElementsByTagName("ID")[0]?.textContent || '';
            const mas = row.getElementsByTagName("HITMAHUT_MISHNIT")[0]?.textContent || '';
            const tesuam = row.getElementsByTagName("TSUA_MITZTABERET_LETKUFA")[0]?.textContent || '';
            const tesuam36 = row.getElementsByTagName("TSUA_MITZTABERET_36_HODASHIM")[0]?.textContent || '';
            const tesuam60 = row.getElementsByTagName("TSUA_MITZTABERET_60_HODASHIM")[0]?.textContent || '';
            
            // הוסף את השורות לאוסף אם הם עומדים בתנאים
            if (Number(yitratnehasim) > 0 && divuach === "דווח" &&
                ochlosiyayaad !== "עובדי סקטור מסויים" && ochlosiyayaad !== `עובדי מפעל/גוף מסויים`
                && mozar !== "מטרה אחרת") {
                window.optionCollection.push(row); // שמור בגלובלי
            }
        }
    }

    // פונקציה לעיבוד קובץ שני (nechasim.xml)
    function processNechasim(xmlString) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "application/xml");
        
        const rows2 = xmlDoc.getElementsByTagName("Row");
        
        for (let i = 0; i < rows2.length; i++) {
            const row2 = rows2[i];
            const idKupaInSecondFile = row2.getElementsByTagName("ID_KUPA")[0]?.textContent || '';

            // חפש אם יש התאמה בין ה-ID בקובץ השני לבין ה-ID בקובץ הראשון
            if (window.optionCollection.some(row => {
                const idKupaInFirstFile = row.getElementsByTagName("ID")[0]?.textContent || '';
                return idKupaInFirstFile === idKupaInSecondFile;
            })) {
                window.optionCollection2.push(row2); // שמור בגלובלי
            }
        }
    }

    // טעינת הקבצים ועיבוד שלהם
    fetch('kupotKlali.xml')
        .then(response => response.text())
        .then(xmlString => {
            processKupotKlali(xmlString);
        });

    fetch('nechasim.xml')
        .then(response => response.text())
        .then(xmlString => {
            processNechasim(xmlString);
        });
});


const tkokadivuach="נכון לחודש 10/2024";
 document.getElementById("tkofatdivuachn").innerText=tkokadivuach;


const mozar=["קרנות השתלמות","תגמולים ואישית לפיצויים","קופת גמל להשקעה",
    "קופת גמל להשקעה - חסכון לילד","מרכזית לפיצויים"];

    const layeled=["חיסכון לילד -חוסכים המעדיפים סיכון מועט","חיסכון לילד -חוסכים המעדיפים סיכון בינוני",
    "חיסכון לילד -חוסכים המעדיפים סיכון גבוה","הלכה יהודית"];
    const hishtalmot=["אג\"ח ממשלות","אג\"ח סחיר","אשראי ואג\"ח","הלכה יהודית","כללי","כספי (שקלי)","מניות","מניות סחיר","משולב מניות","משולב סחיר","עוקב מדד s&p 500","עוקב מדדי אג\"ח","עוקב מדדי מניות","עוקב מדדים - גמיש"];
    const gemel=["50-60","אג\"ח ממשלות","אג\"ח סחיר","אשראי ואג\"ח","הלכה יהודית","50-60","כספי (שקלי)","מניות ","מניות סחיר","60 ומעלה","משולב סחיר","עוקב מדד s&p 500","עוקב מדדי אג\"ח","עוקב מדדי מניות","עוקב מדדים - גמיש"];
    const merkazitlepizuyim=["כללי"];

  var selectElement;
  var maslul= document.getElementById("maslul-type");
   var moz=document.getElementById("product");
  
mozar.forEach(item => {
  const option = document.createElement("option");
  option.value = item;  // value יהיה שם הרכיב
  option.textContent = item;  // textContent יהיה שם הרכיב
  moz.appendChild(option);  // הוספת ה-option ל-select
});

hishtalmot.sort((a, b) => a.localeCompare(b));
hishtalmot.forEach(item => {
  const optiona = document.createElement("option");
  optiona.value = item;  // value יהיה שם הרכיב
  optiona.textContent = item;  // textContent יהיה שם הרכיב
  maslul.appendChild(optiona);  // הוספת ה-option ל-select
});
function changek(){
 for(let i=1;i<=3;i++){
     document.getElementById(`thb${i}`).textContent='';
     document.getElementById(`output${i}`).textContent='';

     document.getElementById(`thb${i+10}`).textContent='';
     document.getElementById(`output${i+10}`).textContent='';
      document.getElementById(`thb${i+20}`).textContent='';
     document.getElementById(`output${i+20}`).textContent='';

 
 }
 document.getElementById('table12').style.display="none";
 document.getElementById('table3').style.display="none";
 document.getElementById('table5').style.display="none";
 if (document.getElementById('rdbutton2').checked){
  document.getElementById('hashspecific').style.display="block";
 }
 else{document.getElementById('hashspecific').style.display="none";
     }
 
}

function rashiadd(){
 changek();
const options = maslul.querySelectorAll('option');
for (let i = 1; i < options.length; i++) {
  maslul.removeChild(options[i]);
}
var rashit;
  
    if(moz.value==="קרנות השתלמות"){rashit=hishtalmot;}
    if(moz.value==="תגמולים ואישית לפיצויים"){rashit=gemel;}
    if(moz.value==="קופת גמל להשקעה"){rashit=hishtalmot;}
    if(moz.value==="קופת גמל להשקעה - חסכון לילד"){rashit=layeled;}
    if(moz.value==="מרכזית לפיצויים"){rashit=merkazitlepizuyim;}
    rashit.sort((a, b) => a.localeCompare(b));
    rashit.forEach(item => {
    const option = document.createElement("option");
    option.value = item;  // value יהיה שם הרכיב
    option.textContent = item;  // textContent יהיה שם הרכיב
    maslul.appendChild(option);  // הוספת ה-option ל-select
});
  
}



function bring(){
 if(maslul.value===''){return;}
 
 
 document.getElementById('table12').style.display="block";
 document.getElementById('table3').style.display="block";
 document.getElementById('table5').style.display="block";

 for(let i=1;i<=3;i++){
     document.getElementById(`thb${i}`).textContent='';
     document.getElementById(`output${i}`).textContent='';
     document.getElementById(`thb${i+10}`).textContent='';
     document.getElementById(`output${i+10}`).textContent='';
     document.getElementById(`thb${i+20}`).textContent='';
     document.getElementById(`output${i+20}`).textContent=''; 
 }
 let optnew;
 const maslul1= document.getElementById("maslul-type1");
 const maslul2= document.getElementById("maslul-type2");
 for (let i = 0; i < window.optionCollection.length; i++) {
    let row = window.optionCollection[i];
    const mozar = row.getElementsByTagName("SUG_KUPA")[0]?.textContent ||  '';
    const mhkupa = row.getElementsByTagName("ID")[0]?.textContent ||  '';
    const shemkupa = row.getElementsByTagName("SHM_KUPA")[0]?.textContent || '';
    const mas = row.getElementsByTagName("HITMAHUT_MISHNIT")[0]?.textContent ||  '';
    const tesuam = row.getElementsByTagName("TSUA_MITZTABERET_LETKUFA")[0]?.textContent ||  '';
    const tesuam36 = row.getElementsByTagName("TSUA_MITZTABERET_36_HODASHIM")[0]?.textContent ||  '';
    const tesuam60 = row.getElementsByTagName("TSUA_MITZTABERET_60_HODASHIM")[0]?.textContent ||  '';
    
  if (document.getElementById('rdbutton2').checked){
       if(mozar===moz.value && (mhkupa===maslul1.value || mhkupa===maslul2.value )) {
            optnew.push({mh:mhkupa, shemkupa: shemkupa,mozar:mozar, tesuam: Number(tesuam), 
              ochlosiyayaad: ochlosiyayaad, divuach: divuach, tesuam36:Number(tesuam36),tesuam60:Number(tesuam60) });      
        }
    }

  else{
    if(mozar===moz.value && mas===maslul.value ) {
           optnew.push({mh:mhkupa, shemkupa: shemkupa,mozar:mozar, tesuam: Number(tesuam), 
              ochlosiyayaad: ochlosiyayaad, divuach: divuach, tesuam36:Number(tesuam36),tesuam60:Number(tesuam60) });
       }
  }

 } 

   if(optnew.length!==0){
      for(let r=0;r<=Math.min(optnew.length-1,2);r++){
       optnew.sort((a, b) => b.tesuam - a.tesuam);        
      document.getElementById(`thb${r+1}`).textContent=optnew[r].shemkupa;
      document.getElementById(`output${r+1}`).textContent=optnew[r].tesuam+'%';

       optionCollection.sort((a, b) => b.tesuam36 - a.tesuam36);
      document.getElementById(`thb${r+11}`).textContent=optnew[r].shemkupa;
      document.getElementById(`output${r+11}`).textContent=optnew[r].tesuam36+'%';

      optionCollection.sort((a, b) => b.tesuam60 - a.tesuam60);
      document.getElementById(`thb${r+21}`).textContent=optnew[r].shemkupa;
      document.getElementById(`output${r+21}`).textContent=optnew[r].tesuam60+'%';
      } 
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

  for (let i = 0; i < window.optionCollection.length; i++) {
    let row = window.optionCollection[i];
    const mozara = row.getElementsByTagName("SUG_KUPA")[0]?.textContent ||  '';
    const shemkupa = row.getElementsByTagName("SHM_KUPA")[0]?.textContent || '';
    const mhkupa = row.getElementsByTagName("ID")[0]?.textContent ||  '';
    const masa = row.getElementsByTagName("HITMAHUT_MISHNIT")[0]?.textContent ||  '';
    const tesuama = row.getElementsByTagName("TSUA_MITZTABERET_LETKUFA")[0]?.textContent ||  '';
    const tesuam36 = row.getElementsByTagName("TSUA_MITZTABERET_36_HODASHIM")[0]?.textContent ||  '';
    const tesuam60 = row.getElementsByTagName("TSUA_MITZTABERET_60_HODASHIM")[0]?.textContent ||  '';
   
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
        

       
       
        
       
     
       

        
  
    
     
   
    
    
   
 

