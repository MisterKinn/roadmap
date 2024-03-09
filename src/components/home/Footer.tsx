import { useEffect, useRef } from "react";
import styled from "styled-components";

styled.p`
    font-family: "Verdana";
    text-align: center;
    font-size: 25px;
    color: grey;
`;

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
                <strong>Kinn</strong>. All Rights Reserved.
            </p>
        </div>
    );
}

export default Footer;
