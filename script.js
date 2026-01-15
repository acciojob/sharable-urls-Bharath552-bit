// your code here
const form=document.querySelector("form")
const heading=document.querySelector("#url")
form.addEventListener('submit',(e)=>{
	e.preventDefault()
	const name=document.querySelector("#name").value
const year=document.querySelector("#year").value
	heading.innerText=`https://localhost:8080/?name=${name}&year=${year}`
})
