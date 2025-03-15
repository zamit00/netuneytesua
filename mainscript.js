const gufmosdixA = [
    'הראל פנסיה וגמל', 'כלל פנסיה וגמל',
    'מגדל מקפת קרנות פנסיה וקופות גמל', 'מנורה מבטחים פנסיה וגמל',
    'הפניקס פנסיה וגמל', 'אלטשולר שחם גמל ופנסיה',
    'אנליסט קופות גמל', 'ילין לפידות ניהול קופות גמל', 'מור גמל ופנסיה',
    'מיטב גמל ופנסיה', 'אינפיניטי השתלמות, גמל ופנסיה '
];

const gufmosdiA = gufmosdixA.sort((a, b) => a.localeCompare(b, 'he'));
const sinon=document.getElementById('sinonHevra')
sinon.innerHTML='';
let opt=document.createElement('option')
opt.value=0;
opt.textContent="בחר חברה";
sinon.appendChild(opt) 
for(let i=0;i<gufmosdiA.length;i++){
     let opt=document.createElement('option')
     opt.textContent=gufmosdiA[i]
     opt.value=gufmosdiA[i]
     sinon.appendChild(opt)  
    }
window.onload = async function() {
    try {
        await Promise.all([
            fetchdataJasonB(),
            fetchdataJasonP(),
             fetchdataJasonM()
        ]);
        tkofa(); 
        backtop();
    } catch (error) {
        console.error("שגיאה בטעינת הנתונים:", error);
    }
};

function hideproductForm(){
  document.getElementById('filter').style.display='none';
}
function hideAllimages(){
    document.getElementById('allImages').style.display='none';
}
function showAllimages(){
    document.getElementById('allImages').style.display='grid';
}

 // 
function showSearch(){
 const srch= document.getElementById('search-container')
 if(srch.style.display==="block"){
   srch.style.display='none'
//document.getElementById("searchResults").innerHTML='';
 }
 else{
srch.style.display='block'
 }
 
}
function maslulimSanen(){
    const select=document.getElementById('sinonHevra').value
    const allTheTables = document.getElementById('allTheTables');
    const visibleH2s = Array.from(allTheTables.querySelectorAll('h2'))
    .filter(h2 => getComputedStyle(h2).display !== 'none');
    var sugmuzar = visibleH2s[0].childNodes[0].textContent.trim(); 
    if(sugmuzar.includes("קרנות פנסיה"))
    {sugmuzar='קרנות חדשות'; maslulimP(30,sugmuzar,select)}
    else {maslulim(30,sugmuzar,select)}   
}

window.addEventListener("scroll", function() {
    let backtop = document.getElementById("backtop");
    let scrollPosition = window.scrollY;
    let screenHeight = window.innerHeight;

    if (scrollPosition > screenHeight * 0.5) {
        backtop.style.display = "block"; // מציג את הכפתור
    } else {
        backtop.style.display = "none"; // מסתיר את הכפתור
    }
});

function backtop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
    


function closeOdot(){
  document.getElementById('odotH').style.display='none';
}
function openOdot(){
  document.getElementById('odotH').style.display='block';
}
function shimosh(){
    const elementScroll=document.getElementById("footer")
      const yOffset = elementScroll.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top: yOffset, behavior: "smooth" });    
}


async function fetchdataJasonM() {
    try {
        const response = await fetch('dataJasonM.json'); 
        if (!response.ok) {
            throw new Error(`שגיאה: ${response.status} ${response.statusText}`);
        }
        const data = await response.json(); 
        datanetunimKlaliXM = data;
	 datanetunimKlaliXM= datanetunimKlaliXM.filter(item=>!item.menahelet.includes('סלייס'));    
        return data;  // חובה להחזיר נתונים כדי שהפונקציה תחכה באמת
    } catch (error) {
        console.error('שגיאה בשליפת הנתונים:', error);
        throw error;  // נזרוק את השגיאה כדי ש-Promise.all יוכל לטפל בה
    }
}
async function fetchdataJasonB() {
    try {
        const response = await fetch('dataJasonB.json'); 
        if (!response.ok) {
            throw new Error(`שגיאה: ${response.status} ${response.statusText}`);
        }
        const data = await response.json(); 
        datanetunimKlaliXB = data; 
        return data;  // החזרת הנתונים כדי ש-`await` יעבוד נכון
    } catch (error) {
        console.error('שגיאה בשליפת הנתונים:', error);
        throw error;  // זורק את השגיאה כדי ש-Promise.all יוכל לטפל בה
    }
}
async function fetchdataJasonP() {
    try {
        const response = await fetch('dataJasonP.json'); 
        if (!response.ok) {
            throw new Error(`שגיאה: ${response.status} ${response.statusText}`);
        }
        const data = await response.json(); 
        datanetunimKlaliXP = data; 
        return data;  // מחזיר את הנתונים כדי שהפונקציה תהיה באמת אסינכרונית
    } catch (error) {
        console.error('שגיאה בשליפת הנתונים:', error);
        throw error;  // זורק את השגיאה כדי ש-Promise.all יוכל לטפל בה
    }
}


document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
document.addEventListener("keydown", function (event) {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});
async function tkofa() {
  let tkofa = document.getElementById('tkufatdivuach');
  try {
      const response = await fetch('kupotHodshAharon.xml');
      const xmlString = await response.text();
      const parser = new DOMParser(); 
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");
      const rows = xmlDoc.getElementsByTagName("Row");
      const rowsForIDKupa = Array.from(rows).filter(row => 
          row.getElementsByTagName("ID_KUPA")[0]?.textContent === '579'
      );
      if (rowsForIDKupa.length === 0) throw new Error("No matching rows found");
      const lastRow = rowsForIDKupa[rowsForIDKupa.length - 1];
      const tkf = lastRow.getElementsByTagName("TKF_DIVUACH")[0]?.textContent;
      if (!tkf) throw new Error("TKF_DIVUACH not found");
      const year = tkf.substring(0, 4);
      const month = tkf.substring(4, 6);
      const formattedDate = `${month}/${year}`;
      tkofa.innerText = 'הנתונים נכונים ל ' + formattedDate;
      return formattedDate;  // החזרת הנתון
  } catch (error) {
      console.error('Error:', error);
      tkofa.innerText = "שגיאה בטעינת הנתונים";
      return null;
  }
}

  function hideTkufa(){
    let tkofa= document.getElementById('tkufatdivuach');
    tkofa.style.display='none';
  }
  
const acceptBtn = document.getElementById('accept-btn');
    acceptBtn.addEventListener('click', async () => {
      const overlay = document.getElementById('overlay');
      const content = document.getElementById('content');
      document.querySelector('.menu-btn').addEventListener('click', toggleMenu);
      const shimushbaatar = document.getElementById('shimushbaatar');
        overlay.style.display = 'none'; 
        content.style.display = 'block'; 
        shimushbaatar.style.display = 'block';
       await maslulim(1,0,0);
       
});
function toggleDropdown(id,arrow) {
    var div=document.getElementById(arrow);
   
    for(let i=1;i<=3;i++){
        let dropdown = document.getElementById(`drp${i}`);
        if (dropdown && `drp${i}`!==id ) {
            dropdown.style.display = 'none';
            div.style.transform="rotate(-90deg)";
        }
    }
    if(document.getElementById(id).style.display==='none' || document.getElementById(id).style.display===''){
        document.getElementById(id).style.display = 'block'; 
        div.style.transform="rotate(+90deg)";
    }
    else{  
        document.getElementById(id).style.display = 'none';
        div.style.transform="rotate(-90deg)";
    }
    //document.querySelectorAll('.dropdown-content').forEach(element => {
     // element.style.display='none';

  //  });
    //    let dropdownShow = document.getElementById(id);
    //    let div=document.getElementById(arrow);
    //    if(dropdownShow.style.display === "block"){dropdownShow.style.display ==="none";
   //         div.style.transform="rotate(-90deg)";
    //    }
   //     else{dropdownShow.style.display === "block";
  //          div.style.transform="rotate(+90deg)"
  //      };
}
function toggleMenu() {
    
  if(document.getElementById("hamb").className.includes('open')){
    document.querySelectorAll('.dropdown-content').forEach(element => {
      element.style.display='none';
      for(let i=1;i<=3;i++){
        let dropdown = document.getElementById(`arrow${i}`);
        dropdown.style.transform="rotate(-90deg)";
      }

    });
        document.getElementById("hamb").classList.remove("open");
        document.querySelector(".menu-container").style.display='none';
        document.getElementById("menu").classList.remove("open");
  }
  else if(document.getElementById("hamb").style.display==="block"){
    document.querySelectorAll('.dropdown-content').forEach(element => {
        element.style.display='none';
        document.getElementById("hamb").className="menu-btn";
        for(let i=1;i<=3;i++){
            let dropdown = document.getElementById(`arrow${i}`);
            dropdown.style.transform="rotate(-90deg)";
          }
      }); 
  }

else{
    document.querySelector(".menu-btn").classList.add("open");
    document.querySelector(".menu-container").style.display='block';
    document.getElementById("menu").classList.add("open");
}
  
  // document.getElementById("menu").classList.toggle("open");
 //  document.querySelector(".menu-btn").classList.toggle("open");
    
//    if(document.querySelector(".menu-btn").className.includes("open")){
//        document.querySelector(".menu-container").style.display='block'; 
       
 //   }
 //   else{document.querySelector(".menu-container").style.display='none'}
}
function chng(x){
    document.getElementById("filter").style.display='none';
    toggleMenu();
    document.querySelector(".menu-btn").classList.remove("open");
   var allDropdowns = document.querySelectorAll('.dropdown-content');
   allDropdowns.forEach(function(dropdown) {dropdown.style.display = "none";});

}
function hisht(x) {
    const screenw=window.innerWidth;
    const screenh=window.innerHeight;
    const maxw=Math.min(screenw*0.95,800);
    const maxh=Math.min(screenh*0.95,600);
    const windowf=`width=${maxw},height=${maxh},resizable=yes,scrollbars=yes`;
    // פתיחת הקובץ בחלון חדש
    window.open( x, '_blank',  windowf
    );
    // סגירת תפריט ההמבורגר
    var hamburgerMenu = document.getElementById("tafrit");
    document.getElementById("menu").classList.remove("open");
    document.querySelector(".menu-btn").classList.remove("open");
    // החזרת הכפתורים למצבם הרגיל
    var btns = document.getElementsByClassName('btn');
    Array.from(btns).forEach(function(btn) {
      if (btn.classList.contains("btna")) {
        btn.classList.remove("btna");
      }
    });
    // הסתרת כל התפריטים הפתוחים
    var allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(function(dropdown) {
      dropdown.style.display = "none";
    });
  }
  function harhev(x){
   const parent= x.parentNode;
   parent.style.height='auto';
   var displayValue;var txtcont;
   const divs = parent.querySelectorAll('div');
   if(x.innerText==="הרחב"){displayValue = 'block';txtcont="כווץ"}
   else{displayValue = 'none';txtcont="הרחב"}
    divs.forEach(div => {
        if(div.className!=='explainHasifa'){div.style.display=displayValue
        };
});
    x.innerText=txtcont;
  }
  function hidkot(){
    document.getElementById('leloMifaliut').style.display='none';
    document.getElementById('hadashim').style.display='none';
    document.getElementById('spanMif').style.display="none";
	document.getElementById('spanHad').style.display="none";
    document.getElementById('filterChoose').style.display="none";
    
    
  }
  function showkot(){
    document.getElementById('leloMifaliut').style.display='inline-block';
    document.getElementById('hadashim').style.display='inline-block';
    document.getElementById('spanMif').style.display="inline-block";
	document.getElementById('spanHad').style.display="inline-block";
  }
 function showIframe(x){
    hidkot()
    toggleMenu()
    document.getElementById('spanMif').style.display="none";
	document.getElementById('spanHad').style.display="none";
	document.getElementById('sanenMosdy').style.display='none';
    chng(document.getElementById('tafrit'));
   document.getElementById('allTheTables').style.display='none';
    document.getElementById('kupaInfo').style.display='none' 
   const iframCont=document.getElementById('iframeContainer');
   iframCont.innerHTML='';
   iframCont.innerHTML=`
   <iframe id="ifrm" class="iframe" src=${x}></iframe>`
   document.getElementById('ifrm').style.display='flex';
   document.getElementById('ifrm').scrollIntoView({ behavior: "smooth" })
 }
 function hidefooter(){
  document.getElementById('footer').style.display='none';
 }





