import React from 'react';
import BasicHooks from './components/BasicHooks';
import AddBookForm from './components/AddBookForm';
import Title from './Title';
import Github from './Github';
import './App.css';

// An object of all possible example components that can be rendered
export const EXAMPLES = {
  BasicHooks,
  AddBookForm,
};

export type Examples = keyof typeof EXAMPLES;

const EXAMPLE_NAMES = Object.keys(EXAMPLES) as Examples[];


const SwitchComponent: React.FC = () => {
    // Use state to keep track of the current displayed example component
    const [example, setExample] = React.useState<Examples>("BasicHooks");

    // The currently selected example component that should be rendered
    const ExampleComponent = EXAMPLES[example];
  
    // A list of buttons for all examples to render
    const exampleButtons = EXAMPLE_NAMES.map(name => (
      <button
        key={name}
        onClick={() => setExample(name)}
        className={name === example ? "active" : ""}
      >
        &lt;
        {name} /&gt;
      </button>
    ));
  
  return (
    <>
      <Title talkingAbout={example.toString()} />
      <Github />
      <div className="container">
        <div className="app">
          {exampleButtons}
          <div className="separator" />
          <ExampleComponent />
        </div>
      </div>
    </>
  )
}


export default SwitchComponent;
