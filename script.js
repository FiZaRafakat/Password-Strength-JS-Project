const password = document.getElementById("password")
const msg = document.getElementById("message")
const strength = document.getElementById("strength")
const requirementList = document.querySelectorAll(".reqList .req")
const progressBar = document.querySelector(".bar")

const requirements = [ 
    {regex : /.{8,}/ , index:0} ,
    {regex : /[a-z]/ , index:1} ,
    {regex : /[A-Z]/ , index:2} ,
    {regex : /[^A-Za-z0-9]/, index:3} ,
    {regex : /[0-9]/ , index:4} ,
]

password.addEventListener("keyup" ,(e)=>{

    let metRequirements = 0 ;

    requirements.forEach( item => {
        const isValid = item.regex.test(e.target.value) ;
        const requirementItem = requirementList[item.index]
        const icon = requirementItem.querySelector('i');

        if(isValid){
            icon.className = "fa-solid fa-check";
            requirementItem.classList.add("valid")
            metRequirements++ ;
        }else{
            icon.className = "fa-solid fa-circle" ;
            requirementItem.classList.remove("valid")
        }
    });

    const progressPercentage = (metRequirements / requirements.length) * 100;
    progressBar.style.width = `${progressPercentage}% `
    
})

