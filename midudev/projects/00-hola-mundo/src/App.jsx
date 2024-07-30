import React from "react";

import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    return (
        <React.StrictMode>
            <div className="App">
                <TwitterFollowCard userName="midudev" initialIsFollowing>
                    Miguel Angel Durán
                </TwitterFollowCard>
                <TwitterFollowCard userName="pheralb" initialIsFollowing>
                    Pablo Hernandez
                </TwitterFollowCard>
                <TwitterFollowCard userName="elonmusk">
                    Elon Musk
                </TwitterFollowCard>
                <TwitterFollowCard>Vanderhart</TwitterFollowCard>
            </div>
        </React.StrictMode>
    );
}
