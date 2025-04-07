// Required by Webpack - do not touch

//TODO - Your ES6 JavaScript code (if any) goes here
import "@fortawesome/fontawesome-free/js/all"
import "bootstrap"

document.addEventListener("DOMContentLoaded", () => {
  const popInElements = document.querySelectorAll(".pop-in")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        } else {
          entry.target.classList.remove("visible") // Remove class when leaving viewport
        }
      })
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  )

  popInElements.forEach((el) => observer.observe(el))
})
