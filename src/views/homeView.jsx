import "../homeStyle.css"

export function HomeView(props){
    return (
    <html>
        <body>
            <div>
                <h1 className="hi_title">Hi,</h1>
            </div>
            <div>
                <h1 className="name_title">I'm Natalia Rodriguez</h1>
            </div>
            <div>
                <h1 className="main_description">Add description here... something about problem solving</h1>
            </div>
            <div className="container">
                <hr className="main_line"></hr>
                <div className="buttons_container">
                    <button className="projects_button">Projects</button>
                    <button className="contact_button">Contact</button>
                </div>
            </div>
        </body>
    </html>
    )
}