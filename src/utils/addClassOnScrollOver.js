const addClassOnScrollOver = ({ target, className, delay = 0 } = {}) => {
  const callback = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add(className);
        }, delay);
      }
    });
  };

  const observer = new IntersectionObserver(callback);

  observer.observe(target);
};

export default addClassOnScrollOver;
