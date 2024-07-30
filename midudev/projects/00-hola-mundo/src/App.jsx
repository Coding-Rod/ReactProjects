import React from "react";

import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    const data = [
        { isFollowing: true, userName: "midudev", children: "Miguel Angel Durán" },
        { isFollowing: false, userName: "pheralb", children: "Fernando Herrera" },
        { isFollowing: true, userName: "elonmusk", children: "Elon Musk" },
        { isFollowing: false, userName: "vanderhart", children: "Kent C. Dodds" },
    ];

    return (
        <React.StrictMode>
            <div className="App">
                {data.map((props) => (
                    <TwitterFollowCard key={props.userName} {...props}>
                        {props.children}
                    </TwitterFollowCard>
                ))}
            </div>
        </React.StrictMode>
    );
}
