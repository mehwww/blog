import 'normalize.css';
import './index.less';

window.addEventListener('load', () => {
  const rageSvgEl = document.querySelector('svg.rage');
  const ragePathTl = rageSvgEl.querySelector('.rage-tl');
  const ragePathTr = rageSvgEl.querySelector('.rage-tr');
  const ragePathB = rageSvgEl.querySelector('.rage-b');

  setTimeout(() => {
    rageSvgEl.classList.add('is-running');
  }, 2000);

  function doPathExitAnimation(postion: 'tl' | 'tr' | 'b') {
    switch (postion) {
      case 'tl': {
        break;
      }
      case 'tr': {
        break;
      }
      case 'b': {
        break;
      }
      default:
        break;
    }
  }

  function addExitSvg(params: {
    top: number;
    left: number;
    width: number;
    height: number;
  }) {
    const randomStr = getRandomStr();
  }

  function getRandomStr() {
    return Math.random()
      .toString(36)
      .substring(7);
  }
});
