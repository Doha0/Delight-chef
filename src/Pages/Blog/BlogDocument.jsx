import { Document, Page, Text } from '@react-pdf/renderer';
import React from 'react';

const BlogDocument = () => {
    return (
        <Document>
            <Page style={{ marginTop: "20px" }}>
                <Text style={{ padding: "10px" }}>
                    Differences between uncontrolled and controlled components.
                </Text>
                <Text style={{ padding: "10px 20px" }}>
                    Controlled components: are predictable because the state of the form
                    elements is handled by the component.Controlled components enable you
                    to effectively employ form validation to your forms. It doesn't matter
                    what changes the form elements. Their values are safe in our local
                    states, so that's where we perform our validation. Uncontrolled
                    components: are those for which the form data is handled by the DOM
                    itself. “Uncontrolled” refers to the fact that these components are
                    not controlled by React state.
                </Text>
                <Text style={{ padding: "10px" }}>
                    How to validate React props using PropTypes
                </Text>
                <Text style={{ padding: "10px 20px" }}>
                    We can use PropTypes to validate the types of props that a component
                    receives. PropTypes is a built-in feature in React that allows you to
                    specify the expected types of each prop in the component's propTypes
                    object. If a prop is of an incorrect type, React will generate a
                    warning.
                </Text>
                <Text style={{ padding: "10px" }}>
                    Difference between nodejs and express js.
                </Text>
                <Text style={{ padding: "10px 20px" }}>
                    Node.js is a runtime environment for executing JavaScript code outside
                    of a web browser. Express.js is a web framework built on top of
                    Node.js that simplifies the process of building web applications by
                    providing a set of features and utilities, such as routing,
                    middleware, and tempesting.
                </Text>
                <Text style={{ padding: "10px" }}>
                    What is a custom hook, and why will you create a custom hook?
                </Text>
                <Text style={{ padding: "10px 20px" }}>
                    A custom hook is a reusable function that allows you to share stateful
                    logic between components. Custom hooks are created by extracting
                    common logic from components into a separate function that can be
                    called from any component. This improves code maintainability and
                    scalability, and reduces code duplication.
                </Text>
            </Page>
        </Document>
    );
};

export default BlogDocument;