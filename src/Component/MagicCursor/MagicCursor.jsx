import React, { useEffect, useState } from 'react';
import './MagicCursor.css';

const MagicCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHidden, setIsHidden] = useState(false);
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnterNavLink = () => {
            setIsSmall(true);
            setIsHidden(true);
        };

        const handleMouseLeaveNavLink = () => {
            setIsSmall(false);
            setIsHidden(false);
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Add event listeners to `nav-link` elements
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link) => {
            link.addEventListener('mouseenter', handleMouseEnterNavLink);
            link.addEventListener('mouseleave', handleMouseLeaveNavLink);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            navLinks.forEach((link) => {
                link.removeEventListener('mouseenter', handleMouseEnterNavLink);
                link.removeEventListener('mouseleave', handleMouseLeaveNavLink);
            });
        };
    }, []);

    return (
        <div id="magic-cursor">
            <div
                id="ball"
                className={`${isSmall ? 'small' : ''} ${isHidden ? 'hidden' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            >
                <div className="circle" />
            </div>
        </div>
    );
};

export default MagicCursor;
