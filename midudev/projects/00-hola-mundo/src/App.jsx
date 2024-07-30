import React from "react";

import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    return (
        <React.StrictMode>
            <div className="App">
                <TwitterFollowCard userName="midudev" isFollowing>
                    Miguel Angel Durán
                </TwitterFollowCard>
                <TwitterFollowCard userName="pheralb" isFollowing={false}>
                    Pablo Hernandez
                </TwitterFollowCard>
                <TwitterFollowCard userName="elonmusk" isFollowing>
                    Elon Musk
                </TwitterFollowCard>
                <TwitterFollowCard isFollowing={false}>
                    Vanderhart
                </TwitterFollowCard>
            </div>
        </React.StrictMode>
    );
}
