
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
