const words = [
    {id: 1, text: 'Ideas', imgPath: '/icons/ideas.svg'},
    {id: 2,text: 'Concepts', imgPath: '/icons/concepts.svg'},
    {id: 3,text: 'Designs', imgPath: '/icons/designs.svg'},
    {id: 4,text: 'Code', imgPath: '/icons/code.svg'},
    {id: 5,text: 'Ideas', imgPath: '/icons/ideas.svg'},
    {id: 6,text: 'Concepts', imgPath: '/icons/concepts.svg'},
    {id: 7,text: 'Designs', imgPath: '/icons/designs.svg'},
    {id: 8,text: 'Code', imgPath: '/icons/code.svg'}
];

const Home = () => {
    return (
        <section id="home">
            <div className="bg">
                <img src="/images/bg.png" alt="background" />
            </div>

                <header className="header">
                    <div className="header-headline-container">
                        <h1 className="header-headline">
                            Building
                            <span className="slide">
                                <span className="wrapper">
                                {words.map((word) => (
                                    <span className="word" key={word.id}>
                                        <img src={word.imgPath} alt={word.text} className="icon" />
                                        <span>{word.text}</span>
                                    </span>
                                ))}
                                </span>
                            </span>
                        </h1>
                        <h1 className="header-headline">Into Reality</h1>
                        <br />
                        <p> 
                            Hi, my name is Manuel.
                            <br />
                            Welcome to my portfolio.
                        </p>
                    </div>
                    <figure className="header-figure">
                        <img src="/images/IsoRoom.png" alt="isometric room" className="header-figure-isoRoom" />
                    </figure>
                </header>
        </section>
    )
}

export default Home;