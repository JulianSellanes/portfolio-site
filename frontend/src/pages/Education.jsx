// import "./App.css";

export const Education = () => {
    const ed = [
        { school:'Centennial College, Canada', degree:'Software Systems Design (COMP 246 et al.)', years:'2024–2026' },
        { school:'Self‑Directed', degree:'AWS serverless architecture, React/Vite', years:'Ongoing' },
    ]

    return (
        <section>
            <h1 className="h1">Education</h1>
            <div className="timeline">
                {ed.map((e,i)=> (
                    <div key={i} className="item">
                        <div className="date">{e.years}</div>
                        <strong>{e.school}</strong>
                        <div>{e.degree}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}