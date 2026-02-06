import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';
import pic04 from '../images/pic04.jpg';
import pic05 from '../images/pic05.jpg';
import pic06 from '../images/pic06.jpg';
import bannerPic from '../images/pic10.jpg';
// Interfețe pentru tipizarea datelor (Bonus pentru nota 10)
interface Feature {
    icon: string;
    title: string;
    desc: string;
}

interface Post {
    id: number;
    image: string;
    title: string;
    desc: string;
}

const Home: React.FC = () => {
    // Datele pentru secțiunea Features
    const features: Feature[] = [
        { icon: 'fa-gem', title: 'Portitor ullamcorper', desc: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.' },
        { icon: 'fa-paper-plane', title: 'Sapien veroeros', desc: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.' },
        { icon: 'fa-rocket', title: 'Quam lorem ipsum', desc: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.' },
        { icon: 'fa-signal', title: 'Sed magna finibus', desc: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.' },
    ];

    // Datele pentru secțiunea Posts (ulterior le poți aduce din API-ul .NET)
    const posts: Post[] = [
        { id: 1, image: pic01, title: 'Interdum aenean', desc: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.' },
        { id: 2, image: pic02, title: 'Nulla amet dolore', desc: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.' },
        { id: 3, image: pic03, title: 'Tempus ullamcorper', desc: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.' },
        { id: 4, image: pic04, title: 'Sed etiam facilis', desc: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.' },
        { id: 5, image: pic05, title: 'Feugiat lorem aenean', desc: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.' },
        { id: 6, image: pic06, title: 'Amet varius aliquam', desc: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.' },
    ];

    return (
        <>
            {/* Banner */}
            <section id="banner">
                <div className="content">
                    <header>
                        <h1>Hi, I’m Editorial<br /> by HTML5 UP</h1>
                        <p>A free and fully responsive site template</p>
                    </header>
                    <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris.</p>
                    <ul className="actions">
                        <li><Link to="/about" className="button big">Learn More</Link></li>
                    </ul>
                </div>
                <span className="image object">
          <img src={bannerPic} alt="Banner" />
        </span>
            </section>

            {/* Section: Features */}
            <section>
                <header className="major">
                    <h2>Erat lacinia</h2>
                </header>
                <div className="features">
                    {features.map((feature, index) => (
                        <article key={index}>
                            <span className={`icon ${feature.icon.includes('fa-gem') ? '' : 'solid'} ${feature.icon}`}></span>
                            <div className="content">
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Section: Posts */}
            <section>
                <header className="major">
                    <h2>Ipsum sed dolor</h2>
                </header>
                <div className="posts">
                    {posts.map((post) => (
                        <article key={post.id}>
                            <Link to={`/post/${post.id}`} className="image">
                                <img src={post.image} alt={post.title} />
                            </Link>
                            <h3>{post.title}</h3>
                            <p>{post.desc}</p>
                            <ul className="actions">
                                <li><Link to={`/post/${post.id}`} className="button">More</Link></li>
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;