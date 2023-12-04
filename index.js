menuBar = (icons) =>icons.classList.toggle('fa-times');
   
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    reponsiveClass: true,
    responsive:{
        0:{
            items: 1,
            nav: true
        },
        600:{
            items: 1,
            nav: false
        },
        1000:{
            items: 3,
            loop: false,
            nav: true
        }
    }
});

// let txtValue = document.querySelector("input");
// txtValue.addEventListener("invalid", va);
// function va() {
//     alert("Wrong Email");
// };   


let submitBtn = document.querySelector("#submit");
let inputDetails = document.querySelector("#email");

 submitBtn.addEventListener("click" , (e)=>{
         let msg =  document.querySelector(".formDisplayMessage"); 
     if(inputDetails.value.trim() === '') {
         msg.innerHTML = "No Information Yet! please do well to input the right information data. Thank You";
         inputDetails.classList.add("Notrequired");
   }else{
       inputDetails.classList.add("required");
           msg.innerHTML = '';
     };
     e.preventDefault();    
 });

const observerEl = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
            if(entry.isIntersecting) {
                entry.target.classList.add("show")
            }else{
                entry.target.classList.remove("show")
            }
    })
});

let onloadEl = document.querySelectorAll('.onload');
onloadEl.forEach((el) => observerEl.observe(el));


let label = document.querySelector("label");

function displayLabel(value) {
    const displayedLabel = document.getElementById("displayedLabel");

    if (value.trim() !== "") {
      displayedLabel.textContent = "You entered: " + value;
      displayedLabel.classList.remove("hidden");
    } else {
      displayedLabel.textContent = "";
      displayedLabel.classList.add("hidden");
    }
  }