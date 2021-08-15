import "./portfolio.scss"


export default function Portfolio() {

    const list = [
        {
            id: "featured",
            title: "Featured",
          },
          {
            id: "web",
            title: "Web App",
          },
          {
            id: "mobile",
            title: "Mobile App",
          },
          {
            id: "design",
            title: "Design",
          },
          {
            id: "content",
            title: "Content",
          },
    ]

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>

            
            
            
            <div className="container">
                <div className="item">
                    <img src="https://i.pinimg.com/474x/53/64/bb/5364bb35652dec6e2bdf20aa78aabcf6.jpg" alt="" />
                    <h3>fefe</h3>
                </div>
            </div>
            <div className="container">
                <div className="item">
                    <img src="https://i.pinimg.com/474x/53/64/bb/5364bb35652dec6e2bdf20aa78aabcf6.jpg" alt="" />
                    <h3></h3>
                </div>
            </div>
            <div className="container">
                <div className="item">
                    <img src="https://i.pinimg.com/474x/53/64/bb/5364bb35652dec6e2bdf20aa78aabcf6.jpg" alt="" />
                    <h3></h3>
                </div>
            </div>
            <div className="container">
                <div className="item">
                    <img src="https://i.pinimg.com/474x/53/64/bb/5364bb35652dec6e2bdf20aa78aabcf6.jpg" alt="" />
                    <h3></h3>
                </div>
            </div>
            <div className="container">
                <div className="item">
                    <img src="https://i.pinimg.com/474x/53/64/bb/5364bb35652dec6e2bdf20aa78aabcf6.jpg" alt="" />
                    <h3></h3>
                </div>
            </div>
            <div className="container">
                <div className="item">
                    <img src="https://i.pinimg.com/474x/53/64/bb/5364bb35652dec6e2bdf20aa78aabcf6.jpg" alt="" />
                    <h3></h3>
                </div>
            </div>
            </ul>
           
            
        </div>
    )
}
