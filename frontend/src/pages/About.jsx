// import "./App.css";

export const About = () => {

    return (
        <section>
            <h1 className="h1">About Me</h1>
            <div className="grid" style={{alignItems:'start'}}>
                <div className="card">
                    <img src="/me.jpg" alt="Julián Sellanes" style={{height:240, objectFit:'cover'}}/>
                    <p className="sub" style={{marginTop:12}}>
                        I’m <strong>Julián Sellanes</strong> — a full‑stack student developer at Centennial College.
                        I enjoy React, Vite, AWS, and game‑adjacent UX touches.
                    </p>
                    <a className="btn" href="/resume.pdf" download>Download Resume (PDF)</a>
                </div>

                <div className="card">
                    <h3>Tech Stack</h3>
                    <ul>
                        <li>React + Vite (SWC)</li>
                        <li>Node/Express, AWS Lambda/DynamoDB</li>
                        <li>Unity (2D), WebSockets</li>
                    </ul>

                    <h3>Highlights</h3>
                    <ul>
                        <li>Serverless card‑game backend with rooms and bets</li>
                        <li>Travel planner integrating maps and events APIs</li>
                        <li>UI polish with pixel/voxel aesthetics</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}