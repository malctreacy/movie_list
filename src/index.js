import React from 'react';
// ReactDOM works to render the react object into the browser. 
import ReactDOM from 'react-dom';
import List from './containers/List';
import Card from './components/Card/Card';

const App = () => {
    return <Card />;
};

// This line mounts the App component to an element with the root ID
// in your document, which is the entry point of the application.
ReactDOM.render(<App />, document.getElementById('root'));