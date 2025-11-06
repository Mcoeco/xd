// Menu Toggle Function
function toggleMenu() {
  const sidebar = document.getElementById("sidebar")
  if (sidebar) {
    sidebar.classList.toggle("active")
  }
}

// Close menu when clicking on main content (mobile only)
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 768) {
    const mainContent = document.querySelector(".main-content")
    if (mainContent) {
      mainContent.addEventListener("click", () => {
        const sidebar = document.getElementById("sidebar")
        if (sidebar) {
          sidebar.classList.remove("active")
        }
      })
    }
  }
})
