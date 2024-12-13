


  
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

function rashiadd(){
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
       
        if(Number(yitratnehasim)>0 &&  divuach ==="דווח" &&
        ochlosiyayaad!== "עובדי סקטור מסויים" && ochlosiyayaad!==`עובדי מפעל/גוף מסויים`
         && moz.value && maslul.value!=='' && mozar!=='מטרה אחרת' && Number(tesuam)!==0
        && tesuam){

        
        if(mozar===moz.value && mas===maslul.value ) {
            optionCollection.push({mh:mhkupa, shemkupa: shemkupa,mozar:mozar, tesuam: Number(tesuam), 
              ochlosiyayaad: ochlosiyayaad, divuach: divuach });
          }
        }
      }
      optionCollection.sort((a, b) => b.tesuam - a.tesuam);
    
      if(optionCollection.length!==0){
      for(let r=0;r<=Math.min(optionCollection.length-1,2);r++){
       
    const thel = document.getElementById(`thb${i}`);
    const tdel = document.getElementById(`output${i}`);
   
    
        thel.textContent = optionCollection[r].shemkupa;
        tdel.textContent = optionCollection[r].tesuam;

          
        
      } 
    
    }
    })
    .catch(error => console.error('Error:', error));
    
    }





// פונקציה שמבצעת את המיון
function sortByTSUA() {
  // המרת ה-XML לאובייקט
  const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlData, "application/xml");
  
  

  // שליפת כל השורות ב-XML
  const rows = xmlDoc.getElementsByTagName("Row");

  // יצירת מערך תוצאות
  const results = [];

  // עבור כל שורה, שלוף את ה-ID ואת התשואה
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const id = row.getElementsByTagName("ID")[0].textContent;
    const tsuaMemuzaat = row.getElementsByTagName("TSUA_MITZTABERET_LETKUFA").textContent;

    // הוסף את התוצאה למערך
    results.push({ id, tsuaMemuzaat });
  }

  // מיין את התוצאות לפי התשואה מהגבוה לנמוך
  results.sort((a, b) => b.tsuaMemuzaat - a.tsuaMemuzaat);

  // הדפס את התוצאות הממוינות
  results.forEach(result => {
    console.log(`ID: ${result.id}, TSUA_MEMUZAAT_LETKUFA: ${result.tsuaMemuzaat}`);
  });
}
