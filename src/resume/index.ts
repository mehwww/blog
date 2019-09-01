import './index.less';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

window.addEventListener('load', () => {
  document
    .querySelector('.header__image_selfie')
    .setAttribute('src', require('./selfie.png'));
  document
    .querySelector('.header__image_avatar')
    .setAttribute('src', require('./avatar.png'));

  const downloadPNGbtnEl = document.querySelector('.js-action__download_png');
  const downloadPDFbtnEl = document.querySelector('.js-action__download_pdf');
  const mainEl = document.querySelector('.main') as HTMLElement;
  const filename = '孟文翰的简历';

  downloadPNGbtnEl.addEventListener('click', async event => {
    event.preventDefault();
    window.scrollTo(0, 0);
    const canvas = await html2canvas(mainEl);
    const linkEl = document.createElement('a');
    linkEl.style.display = 'none';
    linkEl.href = canvas.toDataURL('image/png');
    linkEl.download = filename + '.png';
    document.body.appendChild(linkEl);
    linkEl.click();
    document.body.removeChild(linkEl);
  });

  downloadPDFbtnEl.addEventListener('click', async event => {
    event.preventDefault();
    window.scrollTo(0, 0);
    const canvas = await html2canvas(mainEl);
    const doc = new jsPDF({
      unit: 'px',
      format: [canvas.width, canvas.height],
    });
    doc.addImage(
      canvas.toDataURL('image/png'),
      'PNG',
      0,
      0,
      canvas.width / 1.35,
      canvas.height / 1.35,
    );
    doc.save(filename + '.pdf');
  });
});
