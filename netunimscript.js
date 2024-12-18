
let newWindow = null;
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

function bringinfo(x){
  const mhkupaf= x.parentNode.firstElementChild.innerText;
  
  fetch('kupotKlali.xml')
    .then(response => response.text()) // מקבל את תוכן הקובץ כטקסט
    .then(xmlString => {
      const parser = new DOMParser(); // יוצר parser לניתוח XML
      const xmlDoc = parser.parseFromString(xmlString, "application/xml"); // מנתח את הטקסט למבנה XML
 

      const rows = xmlDoc.getElementsByTagName("Row");
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const mhkupa = row.getElementsByTagName("ID")[0]?.textContent ||  '';
        
        if(mhkupa && Number(mhkupa)===Number(mhkupaf)){
        
       
     
      const mozar = row.getElementsByTagName("SUG_KUPA")[0]?.textContent ||  '';

     
      const shemkupa = row.getElementsByTagName("SHM_KUPA")[0]?.textContent || ''; 
      const mas = row.getElementsByTagName("HITMAHUT_MISHNIT")[0]?.textContent ||  '';
      const tesuam = row.getElementsByTagName("TSUA_MITZTABERET_LETKUFA")[0]?.textContent ||  '';
      const tesuam36 = row.getElementsByTagName("TSUA_MITZTABERET_36_HODASHIM")[0]?.textContent ||  '';
      const tesuam60 = row.getElementsByTagName("TSUA_MITZTABERET_60_HODASHIM")[0]?.textContent ||  '';
      const menahelet = row.getElementsByTagName("SHM_HEVRA_MENAHELET")[0]?.textContent || '';
      const rashit=row.getElementsByTagName("HITMAHUT_RASHIT")[0]?.textContent || '';
      const yitratnechasim=row.getElementsByTagName("YITRAT_NCHASIM_LSOF_TKUFA")[0]?.textContent || '';
      const shiurdn=row.getElementsByTagName("SHIUR_DMEI_NIHUL_AHARON")[0]?.textContent || '';
      const stiya36=row.getElementsByTagName("STIAT_TEKEN_36_HODASHIM")[0]?.textContent || '';
      const stiya60=row.getElementsByTagName("STIAT_TEKEN_60_HODASHIM")[0]?.textContent || '';

      const screenw = window.innerWidth;


      const screenh = window.innerHeight;
      const maxw = Math.min(screenw * 0.95, 800);
  const maxh = Math.min(screenh * 0.95, 600);
  const windowf = `width=${maxw},height=${maxh},resizable=yes,scrollbars=yes`;
  
  // פתיחת החלון החדש
  if (!newWindow || newWindow.closed) {
    newWindow = window.open('', '_blank', windowf);  // פותחים חלון חדש אם הוא לא פתוח
  } else {
    newWindow.document.body.innerHTML = '';  // מנקים את התוכן הקודם בחלון
  }

  
  const tableHTML = `
    <html dir="rtl">
    <head>
      <title style="text-align:center;"></title>
      <style>
        th{background-color:#333;color:white;text-align: right; padding-right:5px;}
        td{padding-right:5px;}
        tr{height:20px;width:90vw;}
        .thsmallinfo{max-width:30vw;text-align:center;}
        .thr{text-align:right;padding-right:5px;}
        .thbiginfo{width:45vw;}
        .oc{background-color:rgb(163, 157, 157);color:rgb(89, 227, 89);font-weight:bold;}
      </style>
    </head>
    <body style="display:flex;flex-direction:column; align-items:center;">
      <table id="tbl1" border="1" class="tblinfo" style="height:auto;width:90vw;margin-bottom:2vw;
      box-sizing:border-box;border-collapse:collapse">
        
          <tr class="trinfo">
            <th class="thbiginfo" >שם קופה</th>
            <td class="thbiginfo" ></td>
          </tr>
        
          <tr class="trinfo" >
            <th class="thbiginfo" >מספר מה</th>
            <td class="thbiginfo" ></td>
          </tr>
          
          <tr class="trinfo" >
            <th class="thbiginfo" >שם חברה מנהלת</th>
            <td class="thbiginfo" ></td>
          </tr>
         <tr class="trinfo" >
            <th class="thbiginfo" >התמחות ראשית</th>
            <td class="thbiginfo" ></td>
          </tr>
        
          <tr class="trinfo" >
            <th class="thbiginfo" >התמחות משנית</th>
            <td class="thbiginfo" ></td>
          </tr>
          
          <tr class="trinfo" >
            <th class="thbiginfo" >תשואה 12 חודשים</th>
            <td class="thbiginfo" ></td>
          </tr>
          <tr class="trinfo" >
            <th class="thbiginfo" >תשואה 3 שנים</th>
            <td class="thbiginfo" ></td>
          </tr>
        
          <tr class="trinfo" >
            <th class="thbiginfo" >תשואה 5 שנים</th>
            <td class="thbiginfo" ></td>
          </tr>
          
          <tr class="trinfo" >
            <th class="thbiginfo" >יתרת נכסים</th>
            <td class="thbiginfo" ></td>
          </tr>
          <tr class="trinfo" >
            <th class="thbiginfo" >שיעור דמי ניהול</th>
            <td class="thbiginfo" ></td>
          </tr>
        
          <tr class="trinfo" >
            <th class="thbiginfo" >סטיית תקן 3 שנים</th>
            <td class="thbiginfo" ></td>
          </tr>
          
          <tr class="trinfo" >
            <th class="thbiginfo" >סטיית תקן 5 שנים</th>
            <td class="thbiginfo" ></td>
          </tr>

      </table>
      <table id="tbl2" border="1" class="tblinfo" style="height:auto;max-width:90vw;margin-bottom:10px;
      box-sizing:border-box;border-collapse:collapse"">
          <tr class="trinfo">
            <th class="thsmallinfo thr oc" style="min-width:45vw;">סוג הנכס</th>
            <th class="thsmallinfo oc" style="min-width:20vw;">סכום באלפי ש"ח</th>
            <th class="thsmallinfo oc" style="min-width:20vw;">שיעור מהנכסים</th>
          </tr>
          <tr class="trinfo">
            <th class="thsmallinfo thr" style="min-width:45vw;">נכסים סחירים ונזילים </th>
            <td class="thsmallinfo" style="min-width:20vw;"></td>
            <td class="thsmallinfo" style="min-width:20vw;"></td>
          </tr>
        
          <tr class="trinfo" >
            <th class="thsmallinfo thr" >נכסים לא סחירים </th>
            <td class="thsmallinfo" ></td>
            <td class="thsmallinfo" ></td>
          </tr>
          
          <tr class="trinfo" >
            <th class="thsmallinfo thr" > נכסים בארץ </th>
            <td class="thsmallinfo" ></td>
            <td class="thsmallinfo" ></td>
          </tr>
          <tr class="trinfo" >
            <th class="thsmallinfo thr" >נכסים בחול </th>
            <td class="thsmallinfo" ></td>
            <td class="thsmallinfo" ></td>
          </tr>
        </table>

        <table id="tbl3" border="1" class="tblinfo" style="height:auto;max-width:90vw;margin-bottom:10px;
        box-sizing:border-box;border-collapse:collapse"" >
          <tr class="trinfo">
            <th class="thsmallinfo thr oc" style="min-width:45vw;">סוג החשיפה</th>
            <td class="thsmallinfo oc" style="min-width:20vw;">סכום באלפי ש"ח</td>
            <td class="thsmallinfo oc" style="min-width:20vw;">שיעור מהנכסים</td>
          </tr>
          <tr class="trinfo" >
            <th class="thsmallinfo thr" style="min-width:45vw;">חשיפה למניות   </th>
            <td class="thsmallinfo" style="min-width:20vw;"></td>
             <td class="thsmallinfo" style="min-width:20vw;"></td>
          </tr>
        
          <tr class="trinfo" >
            <th class="thsmallinfo thr" > חשיפה למטבע חוץ  </th>
            <td class="thsmallinfo" ></td>
             <td class="thsmallinfo" ></td>
          </tr>
          
          <tr class="trinfo" >
            <th class="thsmallinfo thr" > חשיפה לחול </th>
            <td class="thsmallinfo" ></td>
             <td class="thsmallinfo" ></td>
          </tr>
       
        </table>

    </body>
    </html>
  `;

 
  newWindow.document.write(tableHTML);
  newWindow.document.title ="נדרש לסגור את החלון בסיום"

  const tbl1 = newWindow.document.getElementById('tbl1');

  const values = [shemkupa,mhkupa, menahelet,rashit,mas, tesuam+"%", tesuam36+"%", tesuam60+"%",  
     yitratnechasim+" מליוני שח", shiurdn+"%", stiya36, stiya60];
  const rows = tbl1.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {  
    const row = rows[i];
    const cell = row.cells[1];
    if (i - 1 < values.length) {  
      cell.textContent = values[i];
    }
}
  
  




fetch('nechasim.xml')
    .then(response => response.text()) 
    .then(nechsimstring => {
      const parser = new DOMParser(); 
      const xmlNechasim = parser.parseFromString(nechsimstring, "application/xml"); // מנתח את הטקסט למבנה XML
      
      
      const tbl2 = newWindow.document.getElementById('tbl2');
      const tbl3 = newWindow.document.getElementById('tbl3');

      const rows = xmlNechasim.getElementsByTagName("Row");
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const mhkupa = row.getElementsByTagName("ID_KUPA")[0]?.textContent ||  '';
        
        
        const sugneches = row.getElementsByTagName("ID_SUG_NECHES")[0]?.textContent ||  '';
        const schumsugneches = row.getElementsByTagName("SCHUM_SUG_NECHES")[0]?.textContent ||  '';
        const ahuzsugneches = row.getElementsByTagName("ACHUZ_SUG_NECHES")[0]?.textContent ||  '';


        if(mhkupa && Number(mhkupa)===Number(mhkupaf) ){

          if(Number(sugneches)===4721){tbl2.rows[1].cells[1].textContent =Number(schumsugneches).toLocaleString();
            tbl2.rows[1].cells[2].textContent =Number(ahuzsugneches)+"%";
          }
          if(Number(sugneches)===4722){tbl2.rows[2].cells[1].textContent =Number(schumsugneches).toLocaleString();
            tbl2.rows[2].cells[2].textContent =Number(ahuzsugneches)+"%";
          }
          if(Number(sugneches)===4731){tbl2.rows[3].cells[1].textContent =Number(schumsugneches).toLocaleString();
            tbl2.rows[3].cells[2].textContent =Number(ahuzsugneches)+"%";
          }
          if(Number(sugneches)===4732){tbl2.rows[4].cells[1].textContent =Number(schumsugneches).toLocaleString();
            tbl2.rows[4].cells[2].textContent =Number(ahuzsugneches)+"%";
          }
          if(Number(sugneches)===4751){tbl3.rows[1].cells[1].textContent =Number(schumsugneches).toLocaleString();
            tbl3.rows[1].cells[2].textContent =Number(ahuzsugneches)+"%";
          }
          if(Number(sugneches)===4752){tbl3.rows[2].cells[1].textContent =Number(schumsugneches).toLocaleString();
            tbl3.rows[2].cells[2].textContent =Number(ahuzsugneches)+"%";
          }
          if(Number(sugneches)===4761){tbl3.rows[3].cells[1].textContent =Number(schumsugneches).toLocaleString();
            tbl3.rows[3].cells[2].textContent =Number(ahuzsugneches)+"%";
          }



        }
      }
  
      })
      .catch(error => console.error('Error:', error));
  
  
  
  
  newWindow.document.close();
  



     /* console.log(mhkupa+":"+shemkupa +":"+ mozar+":"+ tesuam+":"+tesuam36 +":"+
        tesuam60 +":"+yitratnechasim +":"+shiurdn +":"+ stiya36+":"+menahelet +":"+stiya60)*/
        }
      }

    })
    .catch(error => console.error('Error:', error));
}

function bring(){
 if(maslul.value===''){alert("בחר מסלול השקעה");return;}
 
 
 document.getElementById('table12').style.display="block";
 document.getElementById('table3').style.display="block";
 document.getElementById('table5').style.display="block";

 for(let i=1;i<=3;i++){
     document.getElementById(`thb${i}`).textContent='';
     document.getElementById(`output${i}`).textContent='';
     document.getElementById(`outputmh${i}`).textContent='';
     
     document.getElementById(`thb${i+10}`).textContent='';
     document.getElementById(`output${i+10}`).textContent='';
     document.getElementById(`outputmh${i+10}`).textContent='';

     document.getElementById(`thb${i+20}`).textContent='';
     document.getElementById(`output${i+20}`).textContent='';
     document.getElementById(`outputmh${i+20}`).textContent='';

 
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
      const menahelet = row.getElementsByTagName("SHM_HEVRA_MENAHELET")[0]?.textContent || '';
      const rashit=row.getElementsByTagName("HITMAHUT_RASHIT")[0]?.textContent || '';
      const yitratnechasim=row.getElementsByTagName("YITRAT_NCHASIM_LSOF_TKUFA")[0]?.textContent || '';
      const shiurdn=row.getElementsByTagName("SHIUR_DMEI_NIHUL_AHARON")[0]?.textContent || '';
      const stiya36=row.getElementsByTagName("STIAT_TEKEN_36_HODASHIM")[0]?.textContent || '';
      const stiya60=row.getElementsByTagName("STIAT_TEKEN_60_HODASHIM")[0]?.textContent || '';

     
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
       document.getElementById(`outputmh${r+1}`).textContent=optionCollection[r].mh;      
       document.getElementById(`thb${r+1}`).innerHTML=optionCollection[r].shemkupa
       +      `<i class="fa fa-info-circle"  id='t12_${r+1}' style="font-size: 14px;float:left;margin-left:5px"
        ></i>`;
       document.getElementById(`output${r+1}`).textContent=optionCollection[r].tesuam+'%';

       optionCollection.sort((a, b) => b.tesuam36 - a.tesuam36);
       document.getElementById(`outputmh${r+11}`).textContent=optionCollection[r].mh; 
       document.getElementById(`thb${r+11}`).innerHTML=optionCollection[r].shemkupa
       +      `<i class="fa fa-info-circle"  id='t36_${r+1}' style="font-size: 14px;float:left;margin-left:5px"
        ></i>`;
       document.getElementById(`output${r+11}`).textContent=optionCollection[r].tesuam36+'%';

      optionCollection.sort((a, b) => b.tesuam60 - a.tesuam60);
      document.getElementById(`outputmh${r+21}`).textContent=optionCollection[r].mh; 
      document.getElementById(`thb${r+21}`).innerHTML=optionCollection[r].shemkupa
      +      `<i class="fa fa-info-circle"  id='t60_${r+1}' style="font-size: 14px;float:left;margin-left:5px"
       ></i>`;
      document.getElementById(`output${r+21}`).textContent=optionCollection[r].tesuam60+'%';

       
      } 
    
    }
    })
    .catch(error => console.error('Error:', error));
    
    }
 
