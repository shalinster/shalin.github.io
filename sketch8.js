var allparas;
var oldpara;

var allParagraphs = [];
var pCounter = -1;
var number2=0;
var pid;
var w;
var h;
var starter = 0;
var clickbait = [];
var cnt = -1;
var words = [];
var totalwords = 0;
var arraytotalwords = [];
var pageDivider = [];
var readparas = [];
var countforward = 0;
  var abar = [];
var progbar = [];
var progarray = [];
var cnt2 = 0;

/* eslint no-undef: 0 */
/*   globals setup: true, draw: true, createCanvas, ellipse, width, height */
function setup() {
  // put setup code here
 // noCanvas;
//samplepara.mousePressed(becomeOrange);

    var readvisualize = createCanvas(100,600);
    readvisualize.position(20,165);
    background('#F6F6F6');
   
    


     
h = windowHeight;
w = windowWidth;    
//console.log(h);
//console.log(w);    
allparas = selectAll('p');



    for (var i=0; i<allparas.length; i++) {
      
        
        allParagraphs[i] = allparas[i].html();
        allparas[i].id(i);
        
        words[i] = allParagraphs[i].split(' ');
        totalwords = totalwords + words[i].length;
        arraytotalwords[i]=totalwords;
      //  console.log(allparas[i].size());
      //  console.log(allParagraphs[i]);
         // console.log(allparas.length);
       
        
      //console.log(allparas[i].mouseReleased(changeGray));
     // console.log(allparas[i].id(i));   
        
       // console.log(words.length + "totalwords:" + totalwords);
        //console.log(arraytotalwords);
        
         
        
    
    //    mouseClicked();
    }
    
     
 //225 words * 5 min lengths = 1125 words     
var numberofPages = round(totalwords/1125);
    for (var n=1; n< numberofPages;n++){
        
        var temparray = []; var k = 0;
        
        for (var i=0;i<words.length;i++){
            
           
            
            if ((int(arraytotalwords[i]) - (1125*n))<0) {
              //  console.log(arraytotalwords[i]);
                console.log('do nothing');
            }  
            
            else {
            temparray[k] = i-1;
            k = k+1;
            //console.log(temparray);
            }
                
                
            }
        pageDivider[n-1] = temparray[0];
        /*
        //var pageseperator = createP('-----------------------------------------');
        var pageseperator = createImg('images/line2.png');
        pageseperator.style("max-width:550px");
        pageseperator.style("height:100%");
        pageseperator.style("margin-left:-10px");
        pageseperator.parent(str(pageDivider[n-1]));
        */
        }
     


console.log(pageDivider);    
console.log(arraytotalwords[42]);
    
    
    



    /* numberParas = allparas.length;
       numberofpages = numberparas/parasfor5minreadings;
       pseduo code for hack
       divide article in 5 mins sections 
       find ids they refer to 
       store ids into respective arrays 
       array1 = [1... 10]; 
       array 2 = [11...20];
       find length of each array;
       make readarray1 = array1;
       for each read para remove that from array. 
       (array1.length-readarray.length)/array1.length = fraction of unread material 
       map to something else
    
     */
    
    vis();
     
    for (var t=0; t < allparas.length; t++){
          allparas[t].mouseReleased(changeGray);
    }
    
        
    keyPressed();
    
    
    
    readvisualize.parent("#access1");
        
                                              
}





function draw() {
   

    
 

}




function keyPressed() {
  if (keyCode === DOWN_ARROW) {
      value = 255;
      console.log(value);
      
  } if (keyCode === UP_ARROW) {
    value = 0;
    console.log(value);
  }
    
    /* initialize from i = 1 to begin with.
    right increments paragraph by 1, left decreases by 1 
   style paragraphs according to style template  */
    
    
    if (keyCode === LEFT_ARROW){
        pCounter = pCounter - 1;
        countforward = countforward -1;
        
        cnt = cnt + 1;
        clickbait[cnt] = pCounter;
     
        console.log(clickbait);
        
        
        if (pCounter >= 0){
         
            
         arrowStyle(pCounter);
     arrowUnstyle(pCounter+1);    
            
        var posleft = allparas[pCounter].position();
         console.log(posleft.y % window.innerHeight);   
        if ((posleft.y % window.innerHeight > 600) ) {   
         window.scrollTo(0, posleft.y-500);  
        }
            
        }
        else if (pCounter < 0){
            pCounter= -1;
            arrowUnstyle(0);
        //     console.log(pCounter); 
        }
     //   console.log(pCounter +'here is counter');
       // make  
       // allparas[pCounter].style("color:purple;");
    //   allparas[pCounter+1].style("color:black;");    
        
    }
    else if (keyCode === RIGHT_ARROW){
        pCounter = pCounter + 1;
        readparas[countforward]=pCounter;
        countforward = countforward +1;
        readmaterial();
        cnt = cnt + 1; 
        clickbait[cnt] = pCounter;
        console.log(clickbait);
        
       // allparas[pCounter].style("color:purple;");
        //allparas[pCounter-1].style("color:black;");
        
        if (pCounter == 0) {
           arrowStyle(0) ;
        }
        else {
        arrowStyle(pCounter);
        arrowUnstyle(pCounter-1);
        arrowUnstyle(0);        
        }
       
      //console.log(allparas[pCounter].position());
      
        var pos = allparas[pCounter].position();
        
     //  console.log(pos.y);
      // console.log((pos.y % window.innerHeight));
       // if ((pos.y % window.innerHeight) < 100) 
     //   console.log(pos.y % window.innerHeight);
        console.log(window.innerHeight/2+"he;;p");
        //  window.scrollTo(0, pos.y-(window.innerHeight/2));
        if ((pos.y % window.innerHeight > 600) ){
          //  console.log(window.innerHeight);
            //window.scrollTo(0,10000);
        //    window.scrollTo(0, pos.y-(window.innerHeight/2));
             // console.log(pos.y);
        }      
       progVisual();
    }
    
    else if (keyCode === 83){
        arrowUnstyle(pCounter);
    }
     
    
}


function readmaterial(){
  var a1 = 0;
  var a2 = 0;
  var a3 = 0;
  var a4 = 0;
  var a5 = 0;
  progarray = [];
   var readtillnow = readparas.length;
   var fractionread = round((readtillnow/allparas.length)*100);
  // console.log(fractionread+"this is happeneing");
   // console.log(pageDivider[2]);
   for (var t=0;t<readparas.length;t++){
       if (int(readparas[t])<int(pageDivider[0])){
          a1 = a1 + 1;
          console.log(readparas[t]+'sss'+a1);
       }
       else if ((readparas[t]>=pageDivider[0]) && (readparas[t]< pageDivider[1])){
           a2 = a2+1;
       }
       else if ((readparas[t]>=pageDivider[1]) && (readparas[t]< pageDivider[2])){
           a3 = a3+1;
       }
       else if ((readparas[t]>=pageDivider[2]) && (readparas[t]< pageDivider[3])){
           a4=a4+1;
       }
       else if ((readparas[t]>=pageDivider[3]) && (readparas[t]< allparas.length)){
            a5=a5+1;
                       
       }
   }
    
   
    progarray[0]= (a1/(pageDivider[0]+1)).toFixed(2);
    progarray[1]= (a2/(pageDivider[1]-pageDivider[0])).toFixed(2);
    progarray[2]= (a3/(pageDivider[2]-pageDivider[1])).toFixed(2);
    progarray[3]= (a4/(pageDivider[3]-pageDivider[2])).toFixed(2);
    progarray[4]= (a5/(allparas.length-pageDivider[3])).toFixed(2);
                      
   
    console.log(str(a1/(pageDivider[0]+1))+'so much read');
    console.log(str(a2/(pageDivider[1]-pageDivider[0]))+'so much toread here2');
    console.log(str(a3/(pageDivider[2]-pageDivider[1]))+'so much toread here3');
    console.log(str(a4/(pageDivider[3]-pageDivider[2]))+'so much toread here4');
    console.log(str(a5/(allparas.length-pageDivider[3]))+'so much toread here5');
    console.log(progarray[0]);


   
    
}


function arrowStyle(x1){
    allparas[x1].style("line-height: 1.4em;");
    allparas[x1].style("background-color: #F6F6F6;");
    allparas[x1].style("color:black;");
    allparas[x1].style("font-family: 'Open Sans', sans-serif;");
    allparas[x1].style("letter-spacing: 0em;");
       /* border-style:dotted; */
   /* allparas[x1].style("border-color:rgba(247, 231, 40, 0.49);");*/
    allparas[x1].style("box-shadow: 0px 2px 5px 1px #939191;");
    allparas[x1].style("border-width:medium;");
    allparas[x1].style("transform: scale(1.5);");
    allparas[x1].style("padding: 20px;")
    
  //  var a = (windowWidth - width) / 2;
  //  var b = (windowHeight - height) / 2;
    var pos1 = allparas[pCounter].position();
 //   var pos2 = allparas[].size();
   // console.log(pos2 + "HERESHEHEER");
     window.scrollTo(0, pos1.y-window.innerHeight/2);
    
  
 //   console.log(width);console.log(height);
    //console.log();
  // allparas[x1].position(a,b);
 //allparas[x1].addClass('center-screen');
    
    
   // console.log(allParagraphs[pCounter].size());
}

function arrowUnstyle(y1){
    allparas[y1].style("line-height: 1.4em;");
   // allparas[y1].style("background-color: white;");
    allparas[y1].style("background-color: #F6F6F6;");
    allparas[y1].style("color:black;");
    //allparas[y1].style("font-family: Microsoft sans serif;");
     allparas[y1].style("font-family: 'Open Sans', sans-serif;");
    allparas[y1].style("letter-spacing: 0;");
       /* border-style:dotted; */
   /* allparas[y1].style("border-color:rgba(247, 231, 40, 0.49);");*/
    allparas[y1].style("box-shadow: none;");
    allparas[y1].style("border-width:none;");
    allparas[y1].style("transform: none;"); 
   allparas[y1].style("margin-left: -10px;");
    allparas[y1].style("border-right: 2px solid dimgrey;");
  allparas[y1].style("padding: 10px;");
   

   
}

function mouseClicked(){
  //  console.log("i have been poeked");
    //this.style("color:pink");
}


function changeGray(){
   console.log("hi");
   var tabulator = 0;
  // this.style("color:pink;");
   pid = this.html();
   number2 = this.id();
    
    //console.log(this.id());
    console.log(int(number2)+4);
    console.log(clickbait);
    
    cnt = cnt + 1;
    clickbait[cnt] = int(number2);
   
    pCounter = int(number2);
    
    
    arrowStyle(pCounter);
    
    if (cnt > 0) {
        arrowUnstyle(clickbait[cnt-1]);
    }
    
    for (var l=0;(l<clickbait.length-1);l++){
    
    if (clickbait[cnt]-clickbait[l]==0){
        tabulator= tabulator+1;
    }
   }
    if (tabulator==0){
    readparas[countforward]=pCounter;
    countforward = countforward +1;
         
    readmaterial();
        
         
    }
   progVisual();
}


function vis(){
    
    var xa = 60;
    var yb = 40;
    var wx = 20;
    var hx = 60;
    var crn = 8;
    var padit = 20;
    
    var num = 5;
  
    for (var k =0;k<num;k++){
   // fill('rgba(240, 240, 240, 0.87)');
   // noStroke();    
    
        stroke('grey');      
        strokeWeight('1');
        noFill();
        abar[k]=rect(xa,(yb+(padit*k)+(hx*k)),wx,hx,0,0,crn,crn);
    }
   
    /*
     fill('rgba(80, 255, 181, 0.87)');
    noStroke();
    rect(60, 40, 20, 60, 80);
   
    
    fill('pink');
    noStroke();
    rect(60,40,20,40,80);
   // stroke(1);;
    smooth();
    fill('rgba(80, 255, 181, 0.87)');
    noStroke();
    rect(60,120,20,60,20);
    
    fill('rgba(80, 255, 181, 0.87)');
    noStroke();
    rect(60, 200, 20, 60, 80);
    
    fill('rgba(80, 255, 181, 0.87)');
    noStroke();
    rect(60, 280, 20, 60, 80);
    
     fill('rgba(80, 255, 181, 0.87)');
    noStroke();
    rect(60, 360, 20, 60, 80);
    
    */
}

function progVisual(){
    cnt2 = cnt2 + 1;
    var xa = 60;
    var yb = 40;
    var wx = 20;
    var hx = 60;
    var crn = 5;
    var padit = 20;
    
    var num = 5;
   /* 
    for (var at = 0; at< progarray.length;at++){
        progarray[at] = int(progarray[at]);
    }
    */
    for (var k =0;k<num;k++){
        //console.log('YES I AM HERE');
        fill('rgba(3, 5, 4, 0.95)');
        noStroke();    
        abar[k]=rect(xa,(yb+(padit*k)+(hx*k)),wx,(hx*progarray[k]),0,0,crn,crn);
        //abar[k]=rect(xa,(yb+(padit*k)+(hx*k)),wx,20+(cnt2*5),crn);
        console.log(progarray[0]+'kjj');
    }
    
    
    
}