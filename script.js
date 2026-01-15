// your code here
const form=document.querySelector("form")
const heading=document.querySelector("#url")
const name=document.querySelector("#name").value
const year=document.querySelector("#year").value
form.addEventListener('submit',(e)=>{
	heading.innerText=`https://localhost:8080/?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`
})
