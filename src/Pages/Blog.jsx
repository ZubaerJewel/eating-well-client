
import Pdf from 'react-to-pdf';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
const Blog = () => {
    const ref = useRef();
    return (
        <div>
 <div className='container d-flex justify-content-end me-4'>
 <Pdf targetRef={ref} filename="Blog.pdf">
                {({ toPdf }) => (
                   

                    <Button variant="warning" onClick={toPdf} className="button my-4  justify-content-end"  >Generate PDF</Button>

                )}
            </Pdf>
 </div>


            <div ref={ref}>
                <div className='container my-5'>
                    <h2 className='text-success fw-bold fs-2'>1.Tell us the differences between uncontrolled and controlled components.</h2>
                    <p className='m-3 p-2'> In React, components can be either controlled or uncontrolled. Here are the differences between the two:<br /><br />

                        <strong>1. Controlled Components:</strong>
                        A controlled component is a component where React controls the state of the component. The component's value is controlled by React, which means that any updates to the component's value must go through React.<br /><br />
                        <strong>2. Uncontrolled Components:</strong>
                        An uncontrolled component is a component where the state of the component is handled by the DOM itself. The component's value is not controlled by React, which means that any updates to the component's value do not go through React.
                    </p>



                    <h2 className='text-success fw-bold fs-2'>2. How to validate React props using PropTypes</h2>
                    <p className='m-3 p-2'>**** PropTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.
                        <ul>
                            <li>PropTypes.any: The prop can be of any data type</li>
                            <li>PropTypes.bool: The prop should be a Boolean</li>
                            <li>PropTypes.number: The prop should be a number</li>
                            <li>PropTypes.string: The prop should be a string</li>
                            <li>PropTypes.func: The prop should be a function</li>
                            <li>PropTypes.array: The prop should be an array</li>
                            <li>PropTypes.object: The prop should be an object</li>
                            <li>PropTypes.symbol: The prop should be a symbol</li>
                        </ul>
                    </p>


                    <h2 className='text-success fw-bold fs-2'>3. Tell us the difference between nodejs and express js.</h2>
                    <p>Node.js and Express.js are both JavaScript-based technologies used for building server-side applications. Here are the differences between the two:<br /><br />

                        <strong>1.Node.js:</strong>
                        Node.js is a runtime environment that allows developers to run JavaScript on the server-side. It provides an event-driven, non-blocking I/O model that makes it ideal for building scalable and high-performance applications.<br /><br />
                        <strong>2. Express.js:</strong>
                        Express.js is a web framework for Node.js that provides a set of tools and features for building web applications and APIs. It provides a robust set of features, including routing, middleware, and templating, that make it easy to build scalable and maintainable web applications.
                        <br /><br />
                        Node.js provides the runtime environment for running JavaScript on the server-side, while Express.js is a web framework built on top of Node.js that provides a set of features and tools for building web applications and APIs.
                    </p>


                    <h2 className='text-success fw-bold fs-2'>4. What is a custom hook, and why will you create a custom hook?</h2>
                    <p> A custom hook is essentially a JavaScript function that uses built-in React hooks such as useState, useEffect, useContext, and more to provide some functionality that can be used by multiple components. Custom hooks can be used to manage state, handle side-effects, and perform other operations that require stateful logic.<br /><br />

                        We create custom hooks to avoid code repetition and make our code more modular and reusable. For example, if we find ourselves writing the same code repeatedly in different components, we can create a custom hook to abstract that code and use it across all the components that need that functionality.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default Blog;