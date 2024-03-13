import { useState, useEffect } from "react";
import Link from "next/link";
import "../../styles/topbar.css";

function TopBar() {
    const [topbarHeight, setTopbarHeight] = useState("3em");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 900) {
                setTopbarHeight("3em");
            } else {
                setTopbarHeight("5em");
            }
        };
        handleResize();

        if (window.performance) {
            if (performance.navigation.type === 1) {
                // Detect Refresh
                handleResize();
            }
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="body">
            <div className="topbar">
                <ul>
                    <Link
                        href="/machim//#Home"
                        className="topbar-link"
                        scroll={true}
                    >
                        <strong>Home</strong>
                    </Link>
                </ul>
                <ul>
                    <Link
                        href="/machim//#AboutMachim"
                        className="topbar-link"
                        scroll={true}
                    >
                        <strong>About</strong>
                    </Link>
                </ul>
                <ul>
                    <Link
                        href="/machim//#Manage"
                        className="topbar-link"
                        scroll={true}
                    >
                        <strong>Manage</strong>
                    </Link>
                </ul>
                <ul>
                    <Link
                        href="/machim//#Utility"
                        className="topbar-link"
                        scroll={true}
                    >
                        <strong>Utility</strong>
                    </Link>
                </ul>
                <ul>
                    <Link
                        href="/machim//#Support"
                        className="topbar-link"
                        scroll={true}
                    >
                        <strong>Support</strong>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default TopBar;
