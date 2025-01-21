import { animate } from "motion";

export const enterAnimate = async () => {
  await animate(
    "#line",
    { x: "0%" },
    { ease: [0.87, 0.23, 0.87, 0.23], duration: 1 }
  );

  animate(
    "#line",
    { x: "101%" },
    { ease: [0.87, 0.23, 0.87, 0.23], duration: 1, delay: 1 }
  );

  await animate(
    "#studio",
    {
      y: "100%",
    },
    { delay: 1, ease: [0.87, 0.23, 0.87, 0.23], duration: 0.9 }
  );

  await animate(
    "#modal",
    {
      y: "-100%",
    },
    {
      delay: 1,
      ease: [0.87, 0.23, 0.87, 0.23],
      duration: 0.6,
    }
  );
};
