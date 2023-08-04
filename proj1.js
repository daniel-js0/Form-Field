const box = document.getElementById('checkbox');
const monthly = document.getElementById('monthly');
const yearly = document.getElementById('yearly');
const inputyear = document.getElementById('year');
const inputmon = document.getElementById('mon');
const mon1 = document.getElementById('mon1');
const mon2 = document.getElementById('mon2');
const mon3 = document.getElementById('mon3');
const swip1 = document.getElementById('swip1');
const swip2 = document.getElementById('swip2');
const swip3 = document.getElementById('swip3');
const totalname = document.getElementById('total1');

// button toggler (monthly/yearly)
box.addEventListener ('click' , onclick);
monthly.addEventListener ('click' , onclick);
yearly.addEventListener ('click' , onclick);
function onclick (e) {
 
    if(yearly.classList.contains('hidden')){
        yearly.classList.remove('hidden');
        monthly.classList.add('hidden');
        box.classList.add('bg-blue-900');
        inputyear.classList.add('text-black');
        inputmon.classList.remove('text-black');
        mon1.innerHTML = '$80/year';
        mon2.innerHTML = '$100/year';
        mon3.innerHTML = '$150/year';
        swip1.innerHTML = '$10/year';
        swip2.innerHTML = '$20/year';
        swip3.innerHTML = '$30/year';
        totalname.innerHTML = 'Total (yearly)';
        

} else{
        monthly.classList.contains('hidden');
        monthly.classList.remove('hidden');
        yearly.classList.add('hidden');
        box.classList.remove('bg-blue-900');
        inputmon.classList.add('text-black');
        inputyear.classList.remove('text-black');
        mon1.innerHTML = '$6/mon';
        mon2.innerHTML = '$8/mon';
        mon3.innerHTML = '$12/mon';
        swip1.innerHTML = '$3/mon';
        swip2.innerHTML = '$4/mon';
        swip3.innerHTML = '$5/mon';
        totalname.innerHTML = 'Total(monthly)';

}}

// page 3 option selector
const arcade = document.getElementById('arcade');
const adv = document.getElementById('advanced');
const pro = document.getElementById('pro');

const a1 = document.getElementById('a1');
const ab = document.getElementById('ab');


 arcade.onclick = function(){
        if(arcade.classList.contains('border')){
                arcade.classList.add('bg-red-50' ,'checked:border-red-500' , 'hover:border-red-500');
                adv.classList.remove('bg-red-50','checked:border-red-500', 'hover:border-red-500');
                pro.classList.remove('bg-red-50', 'checked:border-red-500', 'hover:border-red-500');
                a1.classList.remove('hidden');
                ab.classList.remove('hidden');
                a1.innerHTML = 'Arcade';
                const display = mon1.textContent;
                ab.innerHTML =`<p>${display}</p>`;
        }
                box.addEventListener ('click' , ard1);
                function ard1 (b1) {
                        b1.preventDefault();
                        if(box.classList.contains('bg-blue-900')){
                        ab.innerHTML = '$80/year';
                }else if(box.classList.contains('bg-gray-500')){
                        ab.innerHTML = '$6/mon';
                }
                }
                monthly.addEventListener ('click' , ard2);
                function ard2 (b2) {
                b2.preventDefault();
                if(monthly.classList.contains('hidden') || !yearly.classList.contains('hidden')) {
                ab.innerHTML = '$80/year';
                }  
        }

        yearly.addEventListener ('click' , ard3);
        function ard3 (b3) {
                b3.preventDefault();
                if(yearly.classList.contains('hidden') || !monthly.classList.contains('hidden')) {
                 ab.innerHTML = '$6/mon';
                }    
        }  
         }
       

adv.onclick = function(){
        if(adv.classList.contains('border')){
                arcade.classList.remove('bg-red-50', 'checked:border-red-500', 'hover:border-red-500');
                adv.classList.add('bg-red-50', 'checked:border-red-500', 'hover:border-red-500');
                pro.classList.remove('bg-red-50', 'checked:border-red-500', 'hover:border-red-500');
                a1.classList.remove('hidden');
                ab.classList.remove('hidden');
                a1.innerHTML = 'Advanced';
                const display = mon2.textContent;
                ab.innerHTML =`<p>${display}</p>`;
        }
                box.addEventListener ('click' , adv1); 
                function adv1 (v1) {
                        v1.preventDefault();
                        if(box.classList.contains('bg-blue-900')){
                        ab.innerHTML = '$100/year';
                }else if(box.classList.contains('bg-gray-500')){
                        ab.innerHTML = '$8/mon';
                }
                }

                monthly.addEventListener ('click' , adv2);
                function adv2 (v2) {
                v2.preventDefault();
                if(monthly.classList.contains('hidden') || !yearly.classList.contains('hidden')) {
                ab.innerHTML = '$100/year';
                }  
        }

        yearly.addEventListener ('click' , adv3);
        function adv3 (v3) {
                v3.preventDefault();
                if(yearly.classList.contains('hidden') || !monthly.classList.contains('hidden')) {
                ab.innerHTML = '$8/mon';
                }    
        }
}
       


pro.onclick = function(){
        if(pro.classList.contains('border')){
        arcade.classList.remove('bg-red-50', 'checked:border-red-500', 'hover:border-red-500');
        adv.classList.remove('bg-red-50', 'checked:border-red-500', 'hover:border-red-500');
        pro.classList.add('bg-red-50','checked:border-red-500', 'hover:border-red-500');
        a1.classList.remove('hidden');
        ab.classList.remove('hidden');
        a1.innerHTML = 'Pro';
        const display = mon3.textContent;
        ab.innerHTML =`<p>${display}</p>`;
                
}

        box.addEventListener ('click' , pro1); 
        function pro1 (o1) {
        o1.preventDefault();
        if(box.classList.contains('bg-blue-900')){
        ab.innerHTML = '$150/year';
        }else if(box.classList.contains('bg-gray-500')){
        ab.innerHTML = '$12/mon';
}
}  

monthly.addEventListener ('click' , pro2);
        function pro2 (o2) {
        o2.preventDefault();
        if(monthly.classList.contains('hidden') || !yearly.classList.contains('hidden')) {
        ab.innerHTML = '$150/year';
        }  
}

yearly.addEventListener ('click' , pro3);
function pro3 (o3) {
        o3.preventDefault();
        if(yearly.classList.contains('hidden') || !monthly.classList.contains('hidden')) {
        ab.innerHTML = '$12/mon';
        }    
}
}

// email, phone number and name validation/error messages/first page submit
const nameInput = document.getElementById('name');
const mailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const button = document.getElementById('next-button');
const nameerror = document.getElementById('nameerror');
const mailerror = document.getElementById('mailerror');
const phoneerror = document.getElementById('phoneerror');


function firstpageclick(){
        button.textContent = 'clicked';
}
       
button.addEventListener ('click' , firstpageclick);

        function firstpageclick (p) {
        p.preventDefault();
       
        if(nameInput.value === ''){
                nameerror.classList.remove('hidden');
                nameInput.classList.replace('border-gray-300', 'border-red-500');
     
        }else {
                nameerror.classList.add('hidden');
                nameInput.classList.replace('border-red-500', 'border-gray-300');  

        }

        if(mailInput.value === ''){
                mailerror.classList.remove('hidden');
                mailInput.classList.replace('border-gray-300', 'border-red-500');
     
        }else {
                mailerror.classList.add('hidden');
                mailInput.classList.replace('border-red-500', 'border-gray-300');  

        }

        
        if(phoneInput.value === ''){
                phoneerror.classList.remove('hidden');
                phoneInput.classList.replace('border-gray-300', 'border-red-500');
     
        }else {
                phoneerror.classList.add('hidden');
                phoneInput.classList.replace('border-red-500', 'border-gray-300');  

        }              
}


const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const invalidmail = document.getElementById('mailinvalid');

function validateEmailclick(){
        button.textContent = 'clicked';
}

button.addEventListener('click', validateEmailclick);
        function validateEmailclick(y){

                y.preventDefault();

         if (emailPattern.test(mailInput.value)) {
                invalidmail.classList.add("hidden");
        } else if(mailInput.value === ''){
                invalidmail.classList.add("hidden");
        }
        else {
                invalidmail.classList.remove("hidden");
                mailInput.classList.replace('border-gray-300', 'border-red-500');             
       }}

const phonenumberPattern = /^\+?([0-9]{1,3})?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const invalidnum = document.getElementById('phoneinvalid');

function validatenumberclick(){
        button.textContent = 'clicked';
}
button.addEventListener('click', validatenumberclick);
        function validatenumberclick(i){

                i.preventDefault();

        if (phonenumberPattern.test(phoneInput.value)){
                invalidnum.classList.add('hidden');
        } else if (phoneInput.value === ''){
                invalidnum.classList.add('hidden');
        }else{
                invalidnum.classList.remove('hidden');
                phoneInput.classList.replace('border-gray-300', 'border-red-500');             
               }
        }
const arrowup = document.getElementById('arrowup');
const arrowdown = document.getElementById('arrowdown');
const dropdown = document.getElementById('drop');
function arrownclick(){
        arrowdown.textContent = 'clicked';
}
arrowdown.addEventListener('click', arrownclick);
arrowup.addEventListener('click', arrownclick);
        function arrownclick(c){
                c.preventDefault();
        if(arrowup.classList.contains('hidden')){
                arrowdown.classList.add('hidden');
                arrowup.classList.remove('hidden');
                dropdown.classList.remove('hidden');
        }else{
                arrowdown.classList.remove('hidden');
                arrowup.classList.add('hidden');
                dropdown.classList.add('hidden');
        }
}

// phone code options
const custom = document.getElementById('custom img');
const opusa = document.getElementById('opusa');
const opng = document.getElementById('opng');
const opuk = document.getElementById('opuk');
const opaus = document.getElementById('opaus');
const opfrc = document.getElementById('opfrc');
const opger = document.getElementById('opger');
const opity = document.getElementById('opity');



opusa.onclick = function(){
        if(custom.classList.contains('flex')){
        custom.innerHTML = '<img src="img/united-states.png" alt="New Image" class="h-5 w-5 mt-[-1.8] ">';
        dropdown.classList.add('hidden');
        arrowup.classList.add('hidden');
        arrowdown.classList.remove('hidden');
}}
opng.onclick = function(){
        if(custom.classList.contains('flex')){
        custom.innerHTML = '<img src="img/ng.png" alt="New Image" class="h-3 w-5 ">';
        dropdown.classList.add('hidden');
        arrowup.classList.add('hidden');
        arrowdown.classList.remove('hidden');
}}
opuk.onclick = function(){
        if(custom.classList.contains('flex')){
        custom.innerHTML = '<img src="img/uk.png" alt="New Image" class="h-3 w-5 mt-1.9">';
        dropdown.classList.add('hidden');
        arrowup.classList.add('hidden');
        arrowdown.classList.remove('hidden');
}}
opaus.onclick = function(){
        if(custom.classList.contains('flex')){
        custom.innerHTML = '<img src="img/aus.png" alt="New Image" class="h-3 w-5 mt-1.9">';
        dropdown.classList.add('hidden');
        arrowup.classList.add('hidden');
        arrowdown.classList.remove('hidden');
}}
opfrc.onclick = function(){
        if(custom.classList.contains('flex')){
        custom.innerHTML = '<img src="img/france.png" alt="New Image" class="h-3 w-5 mt-1.9">';
        dropdown.classList.add('hidden');
        arrowup.classList.add('hidden');
        arrowdown.classList.remove('hidden');
}}
opger.onclick = function(){
        if(custom.classList.contains('flex')){
        custom.innerHTML = '<img src="img/ger.png" alt="New Image" class="h-3 w-5 mt-1.9">';
        dropdown.classList.add('hidden');
        arrowup.classList.add('hidden');
        arrowdown.classList.remove('hidden');
}}
opity.onclick = function(){
        if(custom.classList.contains('flex')){
        custom.innerHTML = '<img src="img/ity.png" alt="New Image" class="h-3 w-5 mt-1.9">';
        dropdown.classList.add('hidden');
        arrowup.classList.add('hidden');
        arrowdown.classList.remove('hidden');
}}

                          
const nameRegex = /^[A-Za-z\s]+$/;
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const indicator1 = document.getElementById('indicator1');
const indicator2 = document.getElementById('indicator2');
const goback1 = document.getElementById('goback1');
 
function nextstepclick(){
        button.textContent = 'clicked';
}
button.addEventListener('click', nextstepclick);
        function nextstepclick(ns){

                ns.preventDefault();
        if (nameRegex.test(nameInput.value) && emailPattern.test(mailInput.value) && phonenumberPattern.test(phoneInput.value)){
                page1.classList.add('hidden');
                page2.classList.remove('hidden');
                indicator1.classList.remove('bg-white', 'text-black');
                indicator1.classList.add('border-white', 'text-white');
                indicator2.classList.add('bg-white', 'text-black', 'opacity-80');
                indicator2.classList.remove('border-white', 'text-white');
        }
}

function backstepclick(){
        goback1.textContent = 'clicked';
}
goback1.addEventListener('click', backstepclick);
        function backstepclick(bs){

                bs.preventDefault();
        if (page1.classList.contains('hidden')){
                page1.classList.remove('hidden');
                page2.classList.add('hidden');
                indicator1.classList.add('bg-white', 'text-black');
                indicator1.classList.remove('border-white', 'text-white');
                indicator2.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator2.classList.add('border-white', 'text-white');
        }
}

const button2 = document.getElementById('button2');
const page3 = document.getElementById('page3');
const indicator3 = document.getElementById('indicator3');
const goback2 = document.getElementById('goback2');
const errormsg = document.getElementById('errormsg');

// page 2 validation and error message
function nextstepclick2(){
        button2.textContent = 'clicked';
}
button2.addEventListener('click', nextstepclick2);
        function nextstepclick2(ns){

                ns.preventDefault();
        if(arcade.checked || adv.checked || pro.checked){
                page3.classList.remove('hidden');
                page2.classList.add('hidden');
                indicator3.classList.add('bg-white', 'text-black');
                indicator3.classList.remove('border-white', 'text-white');
                indicator2.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator2.classList.add('border-white', 'text-white');
        }else{
                errormsg.classList.remove('hidden');
                setTimeout(() => errormsg.remove(),3500);
              
        }
}

function backstepclick2(){
        goback2.textContent = 'clicked';
}
goback2.addEventListener('click', backstepclick2);
        function backstepclick2(bv){

                bv.preventDefault();
        if (page2.classList.contains('hidden')){
                page2.classList.remove('hidden');
                page3.classList.add('hidden');
                indicator2.classList.add('bg-white', 'text-black');
                indicator2.classList.remove('border-white', 'text-white');
                indicator3.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator3.classList.add('border-white', 'text-white');
                arcade.checked = false;
                adv.checked = false;
                pro.checked = false;
        }
}

const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const button3 = document.getElementById('button3');
const page4 = document.getElementById('page4');
const indicator4 = document.getElementById('indicator4');
const goback3 = document.getElementById('goback3');
const errormsg1 = document.getElementById('errormsg1');

function nextstepclick3(){
        button3.textContent = 'clicked';
}
button3.addEventListener('click', nextstepclick3);
        function nextstepclick3(nt){

                nt.preventDefault();
        if(option1.checked || option2.checked || option3.checked){
                page4.classList.remove('hidden');
                page3.classList.add('hidden');
                indicator4.classList.add('bg-white', 'text-black');
                indicator4.classList.remove('border-white', 'text-white');
                indicator3.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator3.classList.add('border-white', 'text-white');
        }else{
                errormsg1.classList.remove('hidden');
                setTimeout(() => errormsg1.remove(),3500);
              
        }
}


function backstepclick3(){
        goback3.textContent = 'clicked';
}
goback3.addEventListener('click', backstepclick3);
        function backstepclick3(bq){

                bq.preventDefault();
        if (page3.classList.contains('hidden')){
                page3.classList.remove('hidden');
                page4.classList.add('hidden');
                indicator3.classList.add('bg-white', 'text-black');
                indicator3.classList.remove('border-white', 'text-white');
                indicator4.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator4.classList.add('border-white', 'text-white');
                option1.checked = false;
                option2.checked = false;
                option3.checked = false;
        }
}

indicator1.onclick = function(){
        if(page1.classList.contains('hidden')){
                page1.classList.remove('hidden');
                page2.classList.add('hidden');
                page3.classList.add('hidden');
                page4.classList.add('hidden');
                indicator1.classList.add('bg-white', 'text-black', 'opacity-80');   
                indicator1.classList.remove('border-white', 'text-white');

                indicator2.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator2.classList.add('border-white', 'text-white');
                indicator3.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator3.classList.add('border-white', 'text-white');
                indicator4.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator4.classList.add('border-white', 'text-white');
}     
        }

indicator2.onclick = function(){
        if(page2.classList.contains('hidden')){
                page2.classList.remove('hidden');
                page1.classList.add('hidden');
                page3.classList.add('hidden');
                page4.classList.add('hidden');
                indicator2.classList.add('bg-white', 'text-black', 'opacity-80');  
                indicator2.classList.remove('border-white', 'text-white');

                indicator1.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator1.classList.add('border-white', 'text-white');
                indicator3.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator3.classList.add('border-white', 'text-white');
                indicator4.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator4.classList.add('border-white', 'text-white');
}
              
}

indicator3.onclick = function(){
        if(page3.classList.contains('hidden')){
                page3.classList.remove('hidden');
                page1.classList.add('hidden');
                page2.classList.add('hidden');
                page4.classList.add('hidden');
                indicator3.classList.add('bg-white', 'text-black', 'opacity-80');  
                indicator3.classList.remove('border-white', 'text-white');

                indicator1.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator1.classList.add('border-white', 'text-white');
                indicator2.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator2.classList.add('border-white', 'text-white');
                indicator4.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator4.classList.add('border-white', 'text-white');
                
}}
indicator4.onclick = function(){
        if(page4.classList.contains('hidden')){
                page4.classList.remove('hidden');
                page1.classList.add('hidden');
                page2.classList.add('hidden');
                page3.classList.add('hidden');
                indicator4.classList.add('bg-white', 'text-black', 'opacity-80');  
                indicator4.classList.remove('border-white', 'text-white');

                indicator1.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator1.classList.add('border-white', 'text-white');
                indicator3.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator3.classList.add('border-white', 'text-white');
                indicator2.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator2.classList.add('border-white', 'text-white');
                
}}
const b1 = document.getElementById('b1');
const bb = document.getElementById('bb');


option1.onclick = function(){
        if(option1.classList.contains('absolute')){
                b1.classList.remove('hidden');
                bb.classList.remove('hidden');
                b1.innerHTML = 'Online Services';
                const display = swip1.textContent;
                 bb.innerHTML =`<p>${display}</p>`;
                
                
                box.addEventListener ('click' , op1); 
                function op1 (op1) {
                        op1.preventDefault();
                        if(box.classList.contains('bg-blue-900')){
                        bb.innerHTML = '$10/year';
                }else if(box.classList.contains('bg-gray-500')){
                        bb.innerHTML = '$3/mon';
                }
                }}

                monthly.addEventListener ('click' , op2);
                function op2 (op2) {
                op2.preventDefault();
                if(monthly.classList.contains('hidden') || !yearly.classList.contains('hidden')) {
                bb.innerHTML = '$10/year';
                }  
        }

        yearly.addEventListener ('click' , op3);
        function op3 (op3) {
                op3.preventDefault();
                if(yearly.classList.contains('hidden') || !monthly.classList.contains('hidden')) {
                bb.innerHTML = '$3/mon';
                }    
        }
}


option2.onclick = function(){
        if(option2.classList.contains('absolute')){
                b1.classList.remove('hidden');
                bb.classList.remove('hidden');
                b1.innerHTML = 'Larger Storage';
                const display = swip2.textContent;
                 bb.innerHTML =`<p>${display}</p>`;

                box.addEventListener ('click' , ol1); 
                function ol1 (ol1) {
                        ol1.preventDefault();
                        if(box.classList.contains('bg-blue-900')){
                        bb.innerHTML = '$20/year';
                }else if(box.classList.contains('bg-gray-500')){
                        bb.innerHTML = '$4/mon';
                }
                }}

                monthly.addEventListener ('click' , ol2);
                function ol2 (ol2) {
                ol2.preventDefault();
                if(monthly.classList.contains('hidden') || !yearly.classList.contains('hidden')) {
                bb.innerHTML = '$20/year';
                }  
        }

        yearly.addEventListener ('click' , ol3);
        function ol3 (ol3) {
                ol3.preventDefault();
                if(yearly.classList.contains('hidden') || !monthly.classList.contains('hidden')) {
                bb.innerHTML = '$4/mon';
                }    
        }
}


option3.onclick = function(){
        if(option3.classList.contains('absolute')){
                b1.classList.remove('hidden');
                bb.classList.remove('hidden');
                b1.innerHTML = 'Custom Profile';
                const display = swip3.textContent;
                bb.innerHTML =`<p>${display}</p>`;
                
                box.addEventListener ('click' , ov1); 
                function ov1 (ov1) {
                        ov1.preventDefault();
                        if(box.classList.contains('bg-blue-900')){
                        bb.innerHTML = '$30/year';
                }else if(box.classList.contains('bg-gray-500')){
                        bb.innerHTML = '$5/mon';
                }
                }}

                monthly.addEventListener ('click' , ov2);
                function ov2 (ov2) {
                ov2.preventDefault();
                if(monthly.classList.contains('hidden') || !yearly.classList.contains('hidden')) {
                bb.innerHTML = '$30/year';
                }  
        }

        yearly.addEventListener ('click' , ov3);
        function ov3 (ov3) {
                ov3.preventDefault();
                if(yearly.classList.contains('hidden') || !monthly.classList.contains('hidden')) {
                bb.innerHTML = '$5/mon';
                }    
        }
}


const total = document.getElementById('total');

let selectedValueSet1 = 0;
let selectedValueSet2 = 0;


function updateSumResult() {
const sum = selectedValueSet1 + selectedValueSet2;
total.innerHTML = `<P>$${sum}/mon<P>`;     
}

arcade.addEventListener('click', () =>{
        selectedValueSet1 = 6;
        updateSumResult();
});

adv.addEventListener('click', () => {
  selectedValueSet1 = 8;
  updateSumResult();
});

pro.addEventListener('click', () => {
  selectedValueSet1 = 12;
  updateSumResult();
});

option1.addEventListener('click', () => {
  selectedValueSet2 = 3;
  updateSumResult();
});

option2.addEventListener('click', () => {
  selectedValueSet2 = 4;
  updateSumResult();
});

option3.addEventListener('click', () => {
  selectedValueSet2 = 5;
  updateSumResult();
});

let selectedValueSet3 = 0
let selectedValueSet4 = 0


function updateSumResult1() {
        const sum = selectedValueSet3 + selectedValueSet4;
        total.innerHTML = `<P>$${sum}/year<P>`;     
        }
monthly.onclick = function (){
        if(monthly.classList.contains('hidden')){
                arcade.addEventListener('click', () =>{
                        selectedValueSet3 = 80;
                        updateSumResult1();
                });
                
                adv.addEventListener('click', () => {
                  selectedValueSet3 = 100;
                  updateSumResult1();
                });
                
                pro.addEventListener('click', () => {
                  selectedValueSet3 = 150;
                  updateSumResult1();
                });
                
                option1.addEventListener('click', () => {
                  selectedValueSet4 = 10;
                  updateSumResult1();
                });
                
                option2.addEventListener('click', () => {
                  selectedValueSet4 = 20;
                  updateSumResult1();
                });
                
                option3.addEventListener('click', () => {
                  selectedValueSet4 = 30;
                  updateSumResult1();
                }); 
        }
}

let selectedValueSet5 = 0
let selectedValueSet6 = 0

function updateSumResult2() {
        const sum = selectedValueSet5 + selectedValueSet6;
        total.innerHTML = `<P>$${sum}/mon<P>`;     
        }
yearly.onclick = function (){
        if(yearly.classList.contains('hidden')){
                arcade.addEventListener('click', () =>{
                        selectedValueSet5 = 6;
                        updateSumResult2();
                });
                
                adv.addEventListener('click', () => {
                  selectedValueSet5 = 8;
                  updateSumResult2();
                });
                
                pro.addEventListener('click', () => {
                  selectedValueSet5 = 12;
                  updateSumResult2();
                });
                
                option1.addEventListener('click', () => {
                  selectedValueSet6 = 3;
                  updateSumResult2();
                });
                
                option2.addEventListener('click', () => {
                  selectedValueSet6 = 4;
                  updateSumResult2();
                });
                
                option3.addEventListener('click', () => {
                  selectedValueSet6 = 5;
                  updateSumResult2();
                }); 
        }
}

const lastpage = document.getElementById('lastpage');
const button4 = document.getElementById('button4');

function nextstepclick4(){
        button4.textContent = 'clicked';
}
button4.addEventListener('click', nextstepclick4);
        function nextstepclick4(qt){

                qt.preventDefault();
        if(lastpage.classList.contains('hidden')){
                lastpage.classList.remove('hidden');
                page4.classList.add('hidden');
                indicator4.classList.remove('bg-white', 'text-black', 'opacity-80');
                indicator4.classList.add('border-white', 'text-white');
        }
}

const mode = document.getElementById('mode');
const light = document.getElementById('light');
const dark = document.getElementById('dark');
const bdg = document.getElementById('bdg');
const body = document.getElementById('body');
const pagea1 = document.getElementById('pagea1');
const pagea2= document.getElementById('pagea2');




function darkmode(){
        light.textContent = 'clicked';
        
}
light.addEventListener('click', darkmode);
function darkmode (){
        if(dark.classList.contains('hidden')){
        dark.classList.remove('hidden');
        light.classList.add('hidden');
        bdg.style.backgroundImage = 'url("/img/bg-blackn.png")';
        body.classList.add('bg-neutral-500');
        page1.classList.add('text-white');
        page1.classList.add('bg-black');
        pagea1.classList.add('text-white');
        pagea2.classList.add('text-white');
        button.classList.add('bg-white');
        button.classList.replace('text-white', 'text-black');
        
        }
}

function lightmode(){
        light.textContent = 'clicked';
        
}
dark.addEventListener('click', lightmode);
function lightmode (){
        if(light.classList.contains('hidden')){
        dark.classList.add('hidden');
        light.classList.remove('hidden');
        bdg.style.backgroundImage = 'url("/img/bg-sidebar-desktop.png")';
        body.classList.remove('bg-neutral-500');
        page1.classList.remove('text-white');
        page1.classList.remove('bg-black');
        pagea1.classList.remove('text-white');
        pagea2.classList.remove('text-white');
        button.classList.remove('bg-white');
        button.classList.replace('text-black', 'text-white');
        
        }
}


// https://awesome-react-markdown-notes.netlify.app/