"use client";

import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Picture1 from '../../public/assets/pexels-marek-piwnicki-3907296-18998067.jpg';
import Picture2 from '../../public/assets/pexels-fikret-kabay-154474-23813283.jpg';
import Picture3 from '../../public/assets/pexels-efrem-efre-2786187-28763589.jpg';
import Picture4 from '../../public/assets/pexels-molnartamasphotography-28101335.jpg';
import Picture5 from '../../public/assets/pexels-naro-k-670655635-28868268.jpg';
import Picture6 from '../../public/assets/pexels-pincalo-18936031.jpg';
import Picture7 from '../../public/assets/pexels-thefullonmonet-27163466.jpg';

export default function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale }, index) => (
          <motion.div
            key={index}
            style={{ scale }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <div
              className={`relative ${
                index === 0
                  ? 'w-[25vw] h-[25vh]'
                  : index === 1
                  ? 'w-[35vw] h-[30vh] top-[-30vh] left-[5vw]'
                  : index === 2
                  ? 'w-[20vw] h-[45vh] top-[-10vh] left-[-25vw]'
                  : index === 3
                  ? 'w-[25vw] h-[25vh] left-[27.5vw]'
                  : index === 4
                  ? 'w-[20vw] h-[25vh] top-[27.5vh] left-[5vw]'
                  : index === 5
                  ? 'w-[30vw] h-[25vh] top-[27.5vh] left-[-22.5vw]'
                  : 'w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]'
              }`}
            >
              <Image
                src={src}
                fill
                alt="image"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
