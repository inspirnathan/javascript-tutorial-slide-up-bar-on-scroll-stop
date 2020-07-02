const bar = document.querySelector('.bar');

let timeoutId;

const handleScroll = () => {
  bar.classList.remove('bar-visible');
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    bar.classList.add('bar-visible');
  }, 500);
};

document.addEventListener('scroll', handleScroll);
