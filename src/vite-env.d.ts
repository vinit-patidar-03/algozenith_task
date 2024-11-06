/// <reference types="vite/client" />

import { Dispatch, SetStateAction } from "react";

type sidebarProps = {
    activeTab: string;
    setActiveTab: Dispatch<SetStateAction<string>>;
}

type contentBoxProps = {
    activeTab: string;
}

type chapterDetailsProps = {
    chapter: number;
}

type chapterPartProps = {
    index: number;
    chapter: number;
    item: {
        title: string;
        length: string;
        difficulty: string;
        completed: string;
        content: ({
            type: string;
            title: string;
            content: string;
            length: string;
        } | {
            type: string;
            title: string;
            content: string;
            length?: undefined;
        })[];
    }
}

type chapterPartContentProps = {
    content: {
        type: string;
        title: string;
        length: string;
    } | {
        type: string;
        title: string;
        length?: undefined;
    }
}