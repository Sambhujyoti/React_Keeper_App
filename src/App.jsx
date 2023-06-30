import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

import React from 'react';



function App() {
    return (
        <div>
            <Header />
            {notes.map(eachNote => {
                return (
                    <Note
                        key={eachNote.key}
                        title={eachNote.title}
                        content={eachNote.content}
                    />
                );
            })}
            <Footer />
        </div>
    );
}
export default App;