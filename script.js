// ---- Parte 1: Arreglos ----
function ejecutarOperaciones() {
    let numeros = Array.from({length: 10}, () => Math.floor(Math.random() * 100) + 1);
    let suma = numeros.reduce((a, b) => a + b, 0);
    let promedio = suma / numeros.length;
    let max = Math.max(...numeros);
    let min = Math.min(...numeros);
    
    numeros.shift(); // eliminar primero
    numeros.pop();   // eliminar último
    numeros.push(Math.floor(Math.random() * 100) + 1); // agregar nuevo
    numeros.sort((a, b) => a - b); // ordenar
    numeros.reverse(); // invertir
  
    // Mostrar en consola
    console.log("Contenido del arreglo:");
    numeros.forEach((n, i) => {
      console.log(`Posición ${i}: ${n}`);
    });
  
    // Mostrar en HTML
    const resultados = `
      <p><strong>Suma:</strong> ${suma}</p>
      <p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>
      <p><strong>Máximo:</strong> ${max}</p>
      <p><strong>Mínimo:</strong> ${min}</p>
      <p><strong>Arreglo final:</strong> [${numeros.join(", ")}]</p>
    `;
    document.getElementById("resultados-arreglo").innerHTML = resultados;
  }
  
  // ---- Parte 2: Formulario ----
  document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const legajo = document.getElementById("legajo").value.trim();
    const email = document.getElementById("email").value.trim();
    const notas = Array.from(document.getElementsByClassName("nota")).map(input => Number(input.value));
  
    const errorElement = document.getElementById("error");
    errorElement.textContent = "";
  
    // Validaciones
    if (!nombre || !apellido || !legajo || !email || notas.some(n => isNaN(n))) {
      errorElement.textContent = "Por favor, completá todos los campos y notas.";
      return;
    }
  
    const emailValido = /^\S+@\S+\.\S+$/;
    if (!emailValido.test(email)) {
      errorElement.textContent = "El correo no tiene un formato válido.";
      return;
    }
  
    // Calcular promedio
    const suma = notas.reduce((a, b) => a + b, 0);
    const promedio = suma / notas.length;
  
    document.getElementById("resultado-promedio").textContent = `Promedio: ${promedio.toFixed(2)}`;
  });
  