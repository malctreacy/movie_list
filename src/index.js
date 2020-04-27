import React from 'react';
// ReactDOM works to render the react object into the browser. 
import ReactDOM from 'react-dom';
import Card from '';

const App = () => {
    return <h1>movie_list</h1>;
    return <Card />;
};

// This line mounts the App component to an element with the root ID in your document, which is the entry point of the application.
ReactDOM.render(<App />, document.getElementById('root'));