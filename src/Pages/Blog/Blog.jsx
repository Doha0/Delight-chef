import React from 'react';
import BlogDocument from "./BlogDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { GrDocumentPdf } from "react-icons/gr";

const Blog = () => {
    return (
        <div>
            <div className="flex justify-end pb-8 pr-8 mt-4">
                <PDFDownloadLink document={<BlogDocument />} fileName="blog.pdf">
                    {({ loading }) =>
                        loading ? "Loading... " : <GrDocumentPdf size={"40px"} />
                    }
                </PDFDownloadLink>
            </div>
            <div className="lg:max-w-screen-xl sm:mx-auto p-6">
                <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Differences between uncontrolled and controlled components.
                            </p>
                            <p className="text-gray-700">
                                Controlled components are predictable because the state of the
                                form elements is handled by the component.Controlled components
                                enable you to effectively employ form validation to your forms.
                                It doesn't matter what changes the form elements. Their values
                                are safe in our local states, so that's where we perform our
                                validation
                                <br />
                                Uncontrolled components are those for which the form data is
                                handled by the DOM itself. “Uncontrolled” refers to the fact
                                that these components are not controlled by React state.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                How to validate React props using PropTypes
                            </p>
                            <p className="text-gray-700">
                                We can use PropTypes to validate the types of props that a
                                component receives. PropTypes is a built-in feature in React
                                that allows you to specify the expected types of each prop in
                                the component's propTypes object. If a prop is of an incorrect
                                type, React will generate a warning.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Difference between nodejs and express js.
                            </p>
                            <p className="text-gray-700">
                                Node.js is a runtime environment for executing JavaScript code
                                outside of a web browser. Express.js is a web framework built on
                                top of Node.js that simplifies the process of building web
                                applications by providing a set of features and utilities, such
                                as routing, middleware, and tempesting.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What is a custom hook, and why will you create a custom hook?
                            </p>
                            <p className="text-gray-700">
                                A custom hook is a reusable function that allows you to share
                                stateful logic between components. Custom hooks are created by
                                extracting common logic from components into a separate function
                                that can be called from any component. This improves code
                                maintainability and scalability, and reduces code duplication.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;