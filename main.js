document.querySelectorAll(".likebtn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const svg = e.target.closest("svg");
    if (!svg) return;

    if (svg.getAttribute("data-liked")==="false") {
      svg.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" data-liked="true" viewBox="0 0 24 24" width="27" height="33" fill="red" > <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/> </svg>`
      
    }
    else{
      svg.outerHTML = `<svg id="likesvg" data-liked="false" viewBox="0 0 24 24" aria-hidden="true" class=" fill-gray-600 w-[27px] hover:fill-red-600 h-[33px] r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>`
    }
  }
  )
}
)


const svg = share1.querySelector("svg")
share1.addEventListener("click", () => {
    console.log("clicked");
    
      svg.classList.toggle("fill-gray-600");
    svg.classList.toggle("fill-green-600");
}
)
