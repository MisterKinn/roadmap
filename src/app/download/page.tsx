"use client";
import React from "react";
import "@/app/download/download.css";

interface DownloadItem {
    title: string;
    file: string;
}

const downloads: DownloadItem[] = [
    {
        title: "김건우",
        file: "gnwo.zip",
    },

    {
        title: "조하민",
        file: "johamin.zip",
    },

    {
        title: "이경민",
        file: "lkm.zip",
    },

    {
        title: "강준수",
        file: "web.zip",
    },

    {
        title: "김유신",
        file: "yushin.zip",
    },

    {
        title: "김지한",
        file: "jihan.zip",
    },

    {
        title: "전지수",
        file: "jeonjisu.zip",
    },
];

interface DownloadCardProps {
    title: string;
    file: string;
}

function DownloadCard({ title, file }: DownloadCardProps) {
    return (
        <div className="download-card">
            <div className="card-glow" />
            <h3 className="card-title">{title}</h3>
            <a href={file} download={file} className="download-button">
                <span>Download</span>
                <div className="button-overlay" />
            </a>
        </div>
    );
}

export default function DownloadPage() {
    return (
        <div className="page-container">
            <div className="content-wrapper">
                <h1 className="page-title">RoadMap Project Download</h1>
                <p className="page-subtitle">
                    지난 시간에 작업했던 프로젝트를 다운로드하세요.
                </p>
                <div className="cards-grid">
                    {downloads.map((download, index) => (
                        <DownloadCard
                            key={index}
                            title={download.title}
                            file={download.file}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
