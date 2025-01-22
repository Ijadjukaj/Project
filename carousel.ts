"use client"

document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0
  const slides = document.querySelectorAll("#productCarousel > div")
  const totalSlides = slides.length

  function showSlide(index: number) {
    slides.forEach((slide: Element) => {
      ;(slide as HTMLElement).style.display = "none"
    })

    // Show current slide and adjacent slides
    if (window.innerWidth >= 768) {
      // Show all slides on desktop
      slides.forEach((slide: Element) => {
        ;(slide as HTMLElement).style.display = "block"
      })
    } else {
      // Show only current slide on mobile
      ;(slides[index] as HTMLElement).style.display = "block"
    }
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides
    showSlide(currentSlide)
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    showSlide(currentSlide)
  }

  // Initial setup
  showSlide(currentSlide)

  // Auto advance slides every 5 seconds
  setInterval(nextSlide, 5000)

  // Handle window resize
  window.addEventListener("resize", () => {
    showSlide(currentSlide)
  })
})

