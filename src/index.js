import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import "./style.scss";

const LandingComponent = ({ image, text, classes, id, alt, header }) => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el?.current, {
            strings: [...text],
            loop: true,
            backSpeed: 100,
            typeSpeed: 100,
            showCursor: false,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    const downArrow = () => {
        window.scrollTo({
            top: window.innerHeight - 250,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <section className={`landingImageGrid ${classes}`} id={id}>
            <img
                src={image || image.src}
                className="landingImageGrid__image"
                alt={alt}
            />
            <div className="landingImageGrid__textGrid">
                <h1>{header}</h1>
                <span ref={el}></span>
            </div>
            <div className="landingImageGrid__downArrow">
                <h2 onClick={() => downArrow()}>&darr;</h2>
            </div>
        </section>
    );
};

export default LandingComponent;
