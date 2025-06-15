document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");

    projects.forEach((project, index) => {
        project.addEventListener("click", () => {
            alert(`Has seleccionado el Proyecto ${index + 1}`);
        });
    });
});