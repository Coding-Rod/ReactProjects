import { useState } from "react";

export function TwitterFollowCard({
    children,
    userName = "unknown",
    initialIsFollowing = false,
}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    alt="La imagen por defecto"
                    src={`https://unavatar.io/${userName}`}
                />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">
                        @{userName}
                    </span>
                </div>
            </header>
            <aside>
                <button
                    className={
                        "tw-followCard-button " + (isFollowing ? "is-following" : "")
                    }
                    onClick={() => setIsFollowing(!isFollowing)}
                >
                    {isFollowing ? "Siguiendo" : "Seguir"}
                </button>
            </aside>
        </article>
    );
}
