import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Sidebar: React.FC = () => {
    const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});

    const toggleSubmenu = (name: string) => {
        setOpenSubmenus(prev => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    return (
        <div id="sidebar">
            <div className="inner">
                {/* Menu */}
                <nav id="menu">
                    <header className="major">
                        <h2>Menu</h2>
                    </header>
                    <ul>
                        <li><Link to="/">Homepage</Link></li>
                        <li><Link to="/generic">Generic</Link></li>
                        <li>
                            <span
                                className={`opener ${openSubmenus['submenu1'] ? 'active' : ''}`}
                                onClick={() => toggleSubmenu('submenu1')}
                                style={{ cursor: 'pointer' }}
                            >
                                Submenu
                            </span>
                            {openSubmenus['submenu1'] && (
                                <ul>
                                    <li><Link to="#">Lorem Dolor</Link></li>
                                    <li><Link to="#">Ipsum Adipiscing</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="/elements">Elements</Link></li>
                    </ul>
                </nav>

                {/* Contact */}
                <section>
                    <header className="major">
                        <h2>Get in touch</h2>
                    </header>
                    <ul className="contact">
                        <li className="icon solid fa-envelope">
                            <Link to="mailto:info@untitled.tld">info@untitled.tld</Link>
                        </li>
                        <li className="icon solid fa-phone">(000) 000-0000</li>
                    </ul>
                </section>

                {/* Footer */}
                <footer id="footer">
                    <p className="copyright">&copy; Untitled. All rights reserved.</p>
                </footer>

            </div>
        </div>
    );
};

export default Sidebar;
