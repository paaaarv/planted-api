
const addPlant = document.getElementById("addPlant");
const body = document.getElementById("body");
addPlant.addEventListener('click', function(){
    const form= new Form
    let label;
    let input;
    body.innerHTML+="<form>"
    for(let i=0; i< form.attributes.length; i++){
        label=document.createElement("label")
        label.setAttribute("for", `${form.attributes[i]}`)
        label.innerHTML=`${form.attributes[i]}`
        input = document.createElement("input")
        input.setAttribute("type", "text")
        input.setAttribute("value", `${form.attributes[i]}`)
        body.appendChild(label)
        body.appendChild(input)

    }
    body.innerHTML+="</form>"
})

class Form {
    constructor(){
        this.attributes=['name', 'light', 'water', 'fertilizer', 'notes']
    }

     displayForm = () => {
        let html = document.getElementById("body")
        let array = this.attributes.map(arr=>{
            return `<input type='text' value='${arr}'><br>`
        })
        html.innerHTML= array
    }
}
