'use strict'

+(function (window, document) {
  const downloadPNGbtnEl = document.querySelector('.js-action__download_png')
  const downloadPDFbtnEl = document.querySelector('.js-action__download_pdf')
  const mainEl = document.querySelector('.main')
  const filename = '孟文翰的简历'

  downloadPNGbtnEl.addEventListener('click', function (event) {
    event.preventDefault()
    window.scrollTo(0, 0)
    html2canvas(mainEl, {
      onrendered: (canvas) => {
        const linkEl = document.createElement('a')
        linkEl.style.display = 'none';
        linkEl.href = canvas.toDataURL('image/png')
        linkEl.download = filename + '.png'
        document.body.appendChild(linkEl)
        linkEl.click()
        document.body.removeChild(linkEl)
      }
    })
  })

  downloadPDFbtnEl.addEventListener('click', function (event) {
    event.preventDefault()
    window.scrollTo(0, 0)
    html2canvas(mainEl, {
      onrendered: (canvas) => {
        console.log(canvas, canvas.width, canvas.height)
        const doc = new jsPDF('p', 'pt')
        doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, canvas.width / 1.5, canvas.height / 1.5)
        doc.save(filename + '.pdf')
      }
    })
  })
})(window, document)