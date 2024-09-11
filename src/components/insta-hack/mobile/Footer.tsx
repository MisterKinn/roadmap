import { useEffect, useRef } from "react";
import "@/styles/insta-hack/mobile/footer.css";

function Footer() {
    const yearRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const yearElement = yearRef.current;
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear().toString();
        }
    }, []);

    return (
        <div>
            <div id="mobile-banner" className="body">
                <a href="../" title="Logo">
                    <img
                        loading="lazy"
                        src="img/insta-hack/logo.png"
                        alt="Logo"
                    />
                </a>
            </div>

            <div id="footer" className="body">
                <p className="mobile-copyright">
                    &copy; <span id="copyright-year" ref={yearRef} />{" "}
                    <strong>RoadMap X Devques</strong>.
                    <br />
                    All Rights Reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;
