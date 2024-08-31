import React, { useEffect, useState } from 'react';
import styles from "./BackToTop.module.css";

export const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    const scrollToTop = () => {
        document.body.scrollTo({top: 100, behavior: "smooth"});
    }

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = document.body.scrollTop;
            const scrollHeight = document.body.scrollHeight;
            const clientHeight = document.body.clientHeight;
            if (Math.abs(scrollHeight - clientHeight - scrolled) < 1) {
                setVisible(false);
            } else if (scrolled >= 562) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
        document.body.addEventListener("scroll", toggleVisibility);
        return () => {
            document.body.removeEventListener("scroll", toggleVisibility);
        }
      }, []);

    return(
        <>
            <button
            onClick={scrollToTop}
            className={`${styles["back-to-top"]} ${visible && styles["back-to-top-visible"]}`}></button>
        </>
    )
}