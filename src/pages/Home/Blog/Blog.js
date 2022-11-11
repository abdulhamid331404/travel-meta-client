import React from 'react';

const Blog = () => {
    return (
        <div className='w-2/3 items-center ml-10' >
            <div className='text-left p-5 '>
                <h1 className="text-4xl font-bold">
                    Difference between SQL and NoSQL?
                </h1>
                <p className="text-lg">
                    SQL is the programming language used to interface with relational databases. <br />
                    (Relational databases model data as records in rows and tables with logical links between them). <br />
                    NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                </p>
            </div>
            <div className='text-left p-5'>
                <h1 className="text-4xl font-bold">
            What is JWT, and how does it work?
                </h1>
                <p className="text-lg">
                What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting 
 information between parties as JSON object. It is compact, <br /> readable and digitally signed using a private key/ or a 
public key pair by the Identity Provider(IdP).
                </p>
            </div>
            <div className='text-left p-5'>
                <h1 className="text-4xl font-bold">
            What is the difference between javascript and NodeJS?
                </h1>
                <p className="text-lg">
                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.
 js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                </p>
            </div>
            <div className='text-left p-5'>
                <h1 className="text-4xl font-bold">
            How does NodeJS handle multiple requests at the same time?
                </h1>
                <p className="text-lg">
                How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue.
 NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop 
that receives requests and processes them.
                </p>
            </div>
        </div>
    );
};

export default Blog;