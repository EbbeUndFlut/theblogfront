import { useEffect, useState } from "react"

const HeroArticle = (props) => {
    const [article, setArticle] = useState({})
    useEffect(() => {
        fetch("http://localhost:8888/api/article/0")
            .then((response) => response.json())
            .then((data) => setArticle(data))
    }, [])
    return (
        <div className="my-11 mx-auto">
            <img src={"http://localhost:8888/img" + article.url} alt="" />
            <h2>{article.title}</h2>
        </div>
    )
}

export default HeroArticle
