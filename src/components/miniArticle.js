const MiniArticle = (props) => {
    return (
        <div className="">
            <img className="width-full" src={"http://localhost:8888/img/" + props.url} alt="" />
            <p>{props.title}</p>
        </div>
    )
}

export default MiniArticle
