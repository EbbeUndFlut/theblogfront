import { useState, useEffect } from "react"
import Nav from "../components/nav"
import HeroArticle from "../components/heroArticle"
import MiniArticle from "../components/miniArticle"
const Home = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch("http://localhost:8888/api/articles")
            .then((response) => response.json())
            .then((data) => setArticles(data))
    }, [])
    return (
        <>
            <Nav></Nav>

            <section className="flex flex-col justify-center">
                <HeroArticle></HeroArticle>
            </section>

            <main>
                <section className="grid grid-cols-2 gap-4 place-content-center">
                    {articles.map((article) => (article.id != 0 ? <MiniArticle {...article}></MiniArticle> : null))}
                </section>
            </main>
        </>
    )
}

export default Home
