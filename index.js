

    firstCon();
    addSecondContainer();

let s_details=[];

function firstCon(){

    let firstContainer=document.querySelector(`.container-first`);
    firstContainer.innerHTML=`
<div class="student-details">
<h3>Details of students</h3>
<input type="text" 
        placeholder="Enter your name" class="sname-enter">
        <input type="text" placeholder="enter stu-id" class="sid-enter">
    </div>

    <div class="book-details">
        <h3>Book details</h3>
        <input type="number" placeholder="enter your book id" class="bid-enter">
        <input type="text" placeholder="enter name of books" class="bname-enter">

        </div>
        
    <div class="issue-details">
        <h3>Issue books</h3>
        <input type="date" class="date-enter">
        
        </div>
        
        <button class="add-button" onclick="addClick()">Add to library</button>


        `;
        }

        
        function addClick(){
            let n_stu=document.querySelector(`.sname-enter`).value;
            let i_stu=document.querySelector(`.sid-enter`).value;
            let i_book=document.querySelector(`.bid-enter`).value;
            let n_book=document.querySelector(`.bname-enter`).value;
            let date_sub=document.querySelector(`.date-enter`).value;
            s_details.push({studentName:n_stu,studentId:i_stu,bookId:i_book,bookName:n_book,DateSub:date_sub});

            


            
            console.log(s_details);
            
            saveToLocalStorage();
            clearrecord();

        }

        function saveToLocalStorage(){
            localStorage.setItem(`studentDetails`,JSON.stringify(s_details));
            
        }

        function clearrecord(){
            document.querySelector(`.sname-enter`).value=``;
            document.querySelector('.sid-enter').value=``;
            document.querySelector('.bid-enter').value=``;
            document.querySelector(`.bname-enter`).value=``;
            document.querySelector(`.date-enter`).value=``;
        }

        function loadFromLocalStorage(){
            let studentStore=localStorage.getItem(`studentDetails`);
           

            if(studentStore){
                s_details=JSON.parse(studentStore);


            }
            if(bookStore){
                b_details=JSON.parse(studentStore);
            }
        }

loadFromLocalStorage();


function addSecondContainer(){
    
    let secondContainer=document.querySelector(`.container-second`);
    
  
    
secondContainer.innerHTML=`
    
<div>
    <input type="number" placeholder="enter your book id" class="search">
    <button onclick="searchTheArray()">search</button>
    
    
        </div>

        <div class="search-results">
        
        </div>
        
        
        

`;
        }



function searchTheArray(){

let searching=document.querySelector(`.search`).value;
let resultsDiv=document.querySelector(`.search-results`);
resultsDiv.innerHTML=``;
for(let i=0;i<s_details.length;i++){

    if(searching===s_details[i].bookId){

        resultsDiv.innerHTML+=`
        <div>

        <p>The name of the students is ${s_details[i].studentName}</p>
        <p>The name of book is ${s_details[i].bookName}
        <p>The issue date of the book is ${s_details[i].DateSub}

        </div>

`;

    }

}
}