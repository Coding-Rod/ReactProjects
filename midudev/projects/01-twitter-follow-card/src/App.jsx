import React from "react";

import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    { userName: "midudev", name: "Miguel Angel Durán", isFollowing: true },
    { userName: "pheralb", name: "Pablo Hernandez", isFollowing: true },
    { userName: "elonmusk", name: "Elon Musk", isFollowing: false },
    { userName: "vanderhart", name: "Vanderhart", isFollowing: false },
];

export function App() {
    return (
        <React.StrictMode>
            <div className="App">
                {users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        key={userName}
                    >
                        {name}
                    </TwitterFollowCard>
                ))}
            </div>
        </React.StrictMode>
    );
}
