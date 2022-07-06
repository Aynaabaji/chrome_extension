let ulEl = document.querySelector("#unorderedList");
let inp = document.getElementById("inp");
let err = document.getElementById("error");
let but = document.getElementById("in");
let dlt = document.getElementById("dlt");

let arr = [];
let count = 0;

// localStorage.setItem("mytag", "hello");
// localStorage.clear();




function gotcha(){
    let myLeadsToLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
    if(myLeadsToLocalStorage){
        arr = myLeadsToLocalStorage;
        rendr(arr);
    }
}

gotcha();

function rendr(arr){
    for(let j = 0; j<(arr.length); j++){
        var listin = `<li><a href = '${arr[j]}'> ${arr[j]}</a></li>`
        ulEl.innerHTML += listin;
    }
};

function rendre(arr){
    for(let j = 0; j<(arr.length); j++){
        var listin = `<li><a target='_blank' href = '${arr[j]}'> ${arr[j]}</a></li>`
    }
    ulEl.innerHTML += listin;
};


but.addEventListener("click",()=>{
    if(inp.value == ""){
        err.textContent = "Enter a valid text!"
    }
    else{
        let cond = arr.length;
        let inpt = inp.value;
        for(let i = 0; i<cond; i++){
            if(inpt == arr[i]){
                count++;
                err.textContent = 'Already exists in the bookmarks!'
            }
            else{
                console.log("no matches found with previous bookmarks!!")
            }
        }

        if(count == 0){
            arr.push(inpt);
            localStorage.setItem("myLeads",JSON.stringify(arr));
            rendre(arr)
            
        }
    }
    inp.value = '';
    count = 0;
    
})

inp.addEventListener("change", ()=>{
    error.textContent = ''
})

dlt.addEventListener("dblclick", ()=>{
    localStorage.clear();
    arr = [];
    rendr(arr);
    window.location.reload();
})

