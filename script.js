const form = document.querySelector("#form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("#btn")
const dataatual = new Date().toLocaleDateString("pt-BR").slice(0, -5)


button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = dataatual
  const dayExists = nlwSetup.dayExists(today)
  
  if (dayExists === true) {
    alert("Day already exists! ❌")
    console.log("Day already exists!")

  } else {
    alert("Day added! ✔")
    console.log("Day added!")
    nlwSetup.addDay(today)
  }

}

function save() {
  localStorage.setItem("nlwSetup@habits", JSON.stringify(nlwSetup.data))
}
const data = JSON.parse(localStorage.getItem("nlwSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()