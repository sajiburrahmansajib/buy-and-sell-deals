import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='mt-5 mb-5'>
                <h1 className=' text-4xl text-green-600 text-center '> <span className='text-red-600'>Question 1 :</span>  What are the different ways to manage a state in a React application?</h1>
                <div className='mt-5'>
                    <p className='text-center text-3xl'>There are four main ways to properly manage state in  React apps </p>
                    <div className="mockup-code w-44 mx-auto mt-5">
                        <pre data-prefix="1"><code>Local state</code></pre>
                        <pre data-prefix="2"><code>Global state</code></pre>
                        <pre data-prefix="2"><code>Server state</code></pre>
                        <pre data-prefix="2"><code>URL state</code></pre>
                    </div>
                </div>

            </div>
            <div className='mb-10'>
                <h1 className=' text-4xl text-green-600 text-center'> <span className='text-red-600'>Question 2 :</span>  How does prototypical inheritance work?</h1>
                <div className='mt-5 mb-5'>
                    <p className='text-center text-3xl'> Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                </div>
                <p className='text-6xl text-green-600 font-bold text-center'>Syntax:</p>
                <div className="mockup-code w-1/2 mx-auto mt-6">
                    <pre data-prefix="#"><code>ChildObject.__proto__ = ParentObject</code></pre>
                </div>
            </div>
            <div className='mt-6 mb-6'>
                <h1 className=' text-4xl text-green-600 text-center'> <span className='text-red-600'>Question 3 :</span> What is a unit test? Why should we write unit tests?</h1>
                <div className='mt-4'>
                    <p className='text-center text-3xl'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.</p>
                </div>
                <div className='mt-4'>
                    <p className='text-center text-3xl'>We should write unit test because Unit testing ensures that all code meets quality standards before it’s deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
                </div>
            </div>
            <div>
                <h1 className=' text-4xl text-green-600 text-center'> <span className='text-red-600'>Question 4 :</span> React vs. Angular vs. Vue?</h1>
                <div>
                    <div className='w-3/4 mx-auto mb-6'>

                        <h1 className='text-5xl font-bold'>React :</h1>
                        <p className='text-2xl'>React is considered a UI library. They define themselves as:

                            “A JavaScript library for building user interfaces”

                            Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.
                            <br />

                            React doesn’t propose a specific structure to be followed, and with only a few lines of code you can have a simple React application.
                            <br />
                            Nevertheless, we can identify two kinds of blocks inside a React project: Elements and Components. They are written in JSX, a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.
                            <br />
                            The elements are the smallest building blocks of React applications.
                            <br />
                            Components are larger building blocks of React applications. They let you split the UI into independent and reusable pieces.

                            Conceptually, components are like JavaScript functions. They accept arbitrary inputs, called props, and return React elements describing what should appear on the screen. To be able to deal with state and lifecycle features inside these functions they include a bunch of functions called hooks.


                        </p>
                    </div>
                    <div className='w-3/4 mx-auto mb-6'>

                        <h1 className='text-5xl font-bold'>Angular :</h1>
                        <p className='text-2xl'>
                            Angular is built entirely in Typescript and every project on Angular is structured in modules, components and services. At least, each module must have a root module and a root component. <br />
                            According to Angular’s site, Angular applications are modular and have their own modularity system called NgModules.

                            NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities.

                            They can contain components, services and other code files whose scope is defined by the containing NgModule. They can import functionality that is exported from other NgModules and vice-versa.
                            <br />
                            Services are classes where the business logic is implemented. The services are meant to extract all complex and reusable logic outside of the components. For instance, operations like fetching data from the server must be done on services. To make these services available to any component, Angular uses injection of dependencies.

                            This is the main structure that can be identified in an Angular application. However, there are a lot of other pieces involved such as directives, pipes, etc.


                        </p>
                    </div>
                    <div className='w-3/4 mx-auto mb-6'>

                        <h1 className='text-5xl font-bold'>Vue :</h1>
                        <p className='text-2xl'>
                            The structure in Vue.js is pretty simple. All pieces are meant to be self-contained, reusable components. <br />
                            Components in Vue.js are written in Single File Components (SFC) with the extension .vue. Inside these files, there are:
                            <br />

                            The JavaScript logic
                            <br />
                            The HTML template (Vue.js has its own templates) <br />
                            The stylesheet in either CSS or SCSS
                            <br />
                            Another interesting matter to take into consideration is: How many ready-to-use components does the framework offer?

                            Angular has lots of official ready-to-use components. In the Angular Material project, you can find a huge amount of components that you can use on your own project. For React and Vue.js, you can find many on Github or Google.

                            Regarding the development of mobile applications, you can develop cross-platform mobile applications: NativeScript (Angular), React Native (React) and Weex (Vue.js). There’s a good amount of information and support available for both NativeScript and React Native but not so much for Weex, which is mostly used in the Chinese territory.


                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;