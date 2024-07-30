import { useState } from "react";

export function TwitterFollowCard({
    children,
    userName = "unknown",
    initialIsFollowing = false,
}) {
    // State management
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    // Functions
    const buttonClassName = "tw-followCard-button " + (isFollowing ? "is-following" : "");
    const handleClick = () => setIsFollowing(!isFollowing);
    const buttonText = isFollowing ? "Siguiendo" : "Seguir";

    // JSX
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
                    className={buttonClassName}
                    onClick={handleClick}
                >
                    <span className="tw-followCard-text">{buttonText}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}
