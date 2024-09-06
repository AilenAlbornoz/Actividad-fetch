const DATA_URL = 'json/data.json'

const container = document.getElementById('container')

function showData(dataArray) {
  for (const item of dataArray) {
    container.innerHTML += `<li> Estudiante: ${item.name} ${item.lastname} | Edad: ${item.age} años</li>`
  }
}

// Solicitud fetch al archivo JSON con los datos
fetch(DATA_URL)
  .then((res) => res.json())  
  .then(({ course, students, teacherName}) => {  
    document.getElementById('title').innerHTML = `Estudiantes de <span>${course}</span>` 
    document.getElementById('subtitle').innerHTML = `Docente: <span>${teacherName}</span>` 

    showData(students) 
  })