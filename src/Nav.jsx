import { register } from "swiper/element/bundle";
import {useEffect, useRef} from "react";
import { motion } from "framer-motion";
register();

export function Nav({keyCount, clickEvent}) {

    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: true,
            threshold: 5, // in px
            injectStyles: [
                `
                  .swiper-button-next,
                  .swiper-button-prev {
                    background-color: white;
                    border-radius: 2em;
                    width: 4em;
                    height: 2em;
                    padding: 1em 0;
                    top: 3em;
                `,
            ],
        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);

    let keys = [];
    for (let i = 0; i < keyCount; i++) {
        keys.push(
            <swiper-slide key={i}>
                <motion.div
                    className={"pill"}
                    whileHover={{scale: 1.3}}
                    whileTap={{scale: 0.85}}
                    animate={{opacity: 1}}
                    onClick={clickEvent}
                ></motion.div>
            </swiper-slide>
        );
    }
    return (
        <swiper-container thumbs-swiper={".my-thumbs"} class={"nav"} init={"false"} ref={swiperRef}>
            {keys}
        </swiper-container>
    );
}