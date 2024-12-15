const dogma=`<Row>
 <ID>579</ID>
<SHM_KUPA>מגדל השתלמות כללי</SHM_KUPA>
  <TAARICH_HAFAKAT_HADOCH>09/12/2024</TAARICH_HAFAKAT_HADOCH>
  <SUG_KUPA>קרנות השתלמות</SUG_KUPA>
  <SHM_TAAGID_SHOLET>שלמה אליהו אחזקות בע"מ</SHM_TAAGID_SHOLET>
 <SUG_TAAGID_SHOLET>ישראלית</SUG_TAAGID_SHOLET>
 <SHM_HEVRA_MENAHELET>מגדל מקפת קרנות פנסיה וקופות גמל בע"מ</SHM_HEVRA_MENAHELET>
 <TAARICH_HAKAMA>01/01/1997</TAARICH_HAKAMA>
 <UCHLUSIYAT_YAAD>כלל האוכלוסיה</UCHLUSIYAT_YAAD>
 <HITMAHUT_RASHIT>כללי</HITMAHUT_RASHIT>
   <HITMAHUT_MISHNIT>כללי</HITMAHUT_MISHNIT>
  <MI_TKUFAT_DIVUACH>202311</MI_TKUFAT_DIVUACH>
 <AD_TKUFAT_DIVUACH>202410</AD_TKUFAT_DIVUACH>
  <HAFKADOT_LLO_HAAVAROT>1776.68</HAFKADOT_LLO_HAAVAROT>    <MSHICHOT_LLO_HAAVAROT>1240.74</MSHICHOT_LLO_HAAVAROT>
<HAAVAROT_BEIN_HAKUPOT>-1072.26</HAAVAROT_BEIN_HAKUPOT>
<TZVIRA_NETO>-536.32</TZVIRA_NETO>
 <YITRAT_NCHASIM_LSOF_TKUFA>17191.27</YITRAT_NCHASIM_LSOF_TKUFA>
<SHIUR_DMEI_NIHUL_AHARON>0.57</SHIUR_DMEI_NIHUL_AHARON>
    <TSUA_MEMUZAAT_LETKUFA>1.16</TSUA_MEMUZAAT_LETKUFA>
<TSUA_MITZTABERET_LETKUFA>14.91</TSUA_MITZTABERET_LETKUFA>
<TSUA_MEMUZAAT_36_HODASHIM>0.33</TSUA_MEMUZAAT_36_HODASHIM>
 <TSUA_MEMUZAAT_60_HODASHIM>0.5</TSUA_MEMUZAAT_60_HODASHIM>
 <TSUA_MITZTABERET_36_HODASHIM>12.78</TSUA_MITZTABERET_36_HODASHIM>
 <TSUA_MITZTABERET_60_HODASHIM>35.1</TSUA_MITZTABERET_60_HODASHIM>
 <TSUA_SHNATIT_MEMUZAAT_3_SHANIM>4.09</TSUA_SHNATIT_MEMUZAAT_3_SHANIM>
<TSUA_SHNATIT_MEMUZAAT_5_SHANIM>6.2</TSUA_SHNATIT_MEMUZAAT_5_SHANIM>
<STIAT_TEKEN_36_HODASHIM>1.69</STIAT_TEKEN_36_HODASHIM>
<STIAT_TEKEN_60_HODASHIM>2.03</STIAT_TEKEN_60_HODASHIM>
<MATZAV_DIVUACH>דווח</MATZAV_DIVUACH>
<ALPHA_SHNATIT>1.44</ALPHA_SHNATIT>
<SHARP_ANAF>0.36</SHARP_ANAF>
<SHARP_KOL_HAKUPOT>0.6</SHARP_KOL_HAKUPOT>
<SHARP_RIBIT_HASRAT_SIKUN>0.68</SHARP_RIBIT_HASRAT_SIKUN>
<YAHAS_NEZILUT>74.0</YAHAS_NEZILUT>
 <MISPAR_KUPA_AV>0</MISPAR_KUPA_AV>
<NUM_HEVRA>512237744</NUM_HEVRA>
 </Row>`

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
 
 fetch('kupotKlali.xml')
    .then(response => response.text()) // מקבל את תוכן הקובץ כטקסט
    .then(xmlString => {

        const parser = new DOMParser(); // יוצר parser לניתוח XML
        const xmlDoc = parser.parseFromString(xmlString, "application/xml"); // מנתח את הטקסט למבנה XML
        const maslul1= document.getElementById("maslul-type1");
        const maslul2= document.getElementById("maslul-type2");

   

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
     
        if(Number(yitratnehasim)>0 &&  divuach ==="דווח" && !shemkupa.includes('ניהול אישי') && !shemkupa.includes('IRA') &&
        ochlosiyayaad!== "עובדי סקטור מסויים" && ochlosiyayaad!==`עובדי מפעל/גוף מסויים`
         && moz.value && maslul.value!=='' && mozar!=='מטרה אחרת' && Number(tesuam)!==0
        && tesuam){

        if (document.getElementById('rdbutton2').checked){
         if(mozar===moz.value && (mhkupa===maslul1.value || mhkupa===maslul2.value )) {
            optionCollection.push({mh:mhkupa, shemkupa: shemkupa,mozar:mozar, tesuam: Number(tesuam), 
              ochlosiyayaad: ochlosiyayaad, divuach: divuach, tesuam36:Number(tesuam36),tesuam60:Number(tesuam60) });
          
         
          }
         
        }
         else{
        if(mozar===moz.value && mas===maslul.value ) {
            optionCollection.push({mh:mhkupa, shemkupa: shemkupa,mozar:mozar, tesuam: Number(tesuam), 
              ochlosiyayaad: ochlosiyayaad, divuach: divuach, tesuam36:Number(tesuam36),tesuam60:Number(tesuam60) });
          }
         }
        }
      }
    
    
     
      if(optionCollection.length!==0){
      for(let r=0;r<=Math.min(optionCollection.length-1,2);r++){
       optionCollection.sort((a, b) => b.tesuam - a.tesuam);        
      document.getElementById(`thb${r+1}`).textContent=optionCollection[r].shemkupa;
      document.getElementById(`output${r+1}`).textContent=optionCollection[r].tesuam+'%';

       optionCollection.sort((a, b) => b.tesuam36 - a.tesuam36);
      document.getElementById(`thb${r+11}`).textContent=optionCollection[r].shemkupa;
      document.getElementById(`output${r+11}`).textContent=optionCollection[r].tesuam36+'%';

      optionCollection.sort((a, b) => b.tesuam60 - a.tesuam60);
      document.getElementById(`thb${r+21}`).textContent=optionCollection[r].shemkupa;
      document.getElementById(`output${r+21}`).textContent=optionCollection[r].tesuam60+'%';

       
      } 
    
    }
    })
    .catch(error => console.error('Error:', error));
    
    }
 
