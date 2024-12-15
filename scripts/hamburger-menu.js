// Script pour gérer le menu hamburger
document.getElementById("hamburger").addEventListener("click", function() {
	var navbarLinks = document.querySelector(".navbar-links");
	navbarLinks.classList.toggle("active"); // Toggle l'affichage du menu

	// Toggle l'animation de l'icône hamburger
	this.classList.toggle("active");
});

// Fermer le menu lorsque l'un des liens est cliqué
var menuLinks = document.querySelectorAll(".navbar-links a");

menuLinks.forEach(function(link) {
	link.addEventListener("click", function() {
		var navbarLinks = document.querySelector(".navbar-links");
		navbarLinks.classList.remove("active"); // Ferme le menu
		document.getElementById("hamburger").classList.remove("active"); // Restaure l'icône hamburger
	});
});