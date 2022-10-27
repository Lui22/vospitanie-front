const transition = {
  stiffness: 2500,
  damping: 600,
  mass: 50,
};

export default {
  initial: {
    opacity: 0,
    y: -100,
    transition,
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition,
  },
  to_right: {
    opacity: 0,
    x: 100,
    transition,
  },
  to_left: {
    opacity: 0,
    x: -100,
    transition,
  },
};
