import { useEffect, useRef } from "react";

function Footer() {
    const yearRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const yearElement = yearRef.current;
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear().toString();
        }
    }, []);
    return (
        <div id="footer" className="body">
            <p>
                &copy; <span id="copyright-year" ref={yearRef} />{" "}
                <strong>RoadMap</strong>. All Rights Reserved.
            </p>
        </div>
    );
}

export default Footer;
