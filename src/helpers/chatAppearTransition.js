const transition = {
  stiffness: 2500,
  damping: 600,
  mass: 40,
};

export default {
  initial: {
    opacity: 0,
    x: 100,
    transition,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition,
  },
  leave: {
    opacity: 0,
    x: 100,
    transition,
  },
};
