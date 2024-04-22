let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
// Responsive Navbar Toggle
document.getElementById('navbar-toggle').addEventListener('click', function () {
    document.getElementById('navbar-menu').classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function() {
    const textSpan = document.querySelector('.text-typing');
    const text = textSpan.textContent;
    textSpan.textContent = '';

    function typeWriter(text, i) {
      if (i < text.length) {
        textSpan.textContent += text.charAt(i);
        setTimeout(function() {
          typeWriter(text, i + 1);
        }, 37); // Adjust typing speed here
      }
    }

    typeWriter(text, 0);
  });

  function openForm() {
      modal.style.display = "block";
  }

  span.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  // Submit form data using AJAX
  document.getElementById("submitBtn").addEventListener("click", function(event) {
      event.preventDefault();
      let form = document.getElementById("myForm");
      let formData = new FormData(form);
      
      fetch("../php/submit_form.php", {
          method: "POST",
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          alert(data.message);
          modal.style.display = "none";
      })
      .catch(error => console.error('Error:', error));
    });
    