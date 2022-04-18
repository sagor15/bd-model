import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="text-start question py-5 ">
                <h1 className="question fs-1">Q.1: Difference between authorization and authentication?</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="fs-2 fw-normal text-center" scope="col">Authorization</th>
                            <th className="fs-2 fw-normal text-center" scope="col">Authentication</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr >
                            <td className="fs-4 fw-light" scope="row">Authorization gives extra power to do other things after login.</td>
                            <td className="fs-4 fw-light">Authentication gives assurance to log in by Email and Password.</td>
                        </tr>
                        <tr >
                            <td className="fs-4 fw-light" scope="row">Authorization determines what resources a user can access.</td>
                            <td className="fs-4 fw-light">Authentication verifies who the user is.</td>
                        </tr>
                        <tr >
                            <td className="fs-4 fw-light" scope="row">It comes when the authentication is done.</td>
                            <td className="fs-4 fw-light">It is the first step of a good identity and access management process.</td>
                        </tr>
                        <tr >
                            <td className="fs-4 fw-light" scope="row">Authorization is not visible to or changeable by the user.</td>
                            <td className="fs-4 fw-light">Authentication is visible to and partially changeable by the user.</td>
                        </tr>
                        <tr >
                            <td className="fs-4 fw-light" scope="row">Example: After authorization, employees and can access different levels of data. </td>
                            <td className="fs-4 fw-light">Example: By verifying their identity, employees can gain access to the application</td>
                        </tr>
                    </tbody>
                </table>
                <p className="fs-4 fw-light"></p>
            </div>
            
            <h1 className='question text-4xl '>Q2: Why are you using firebase? What other options do you have to implement authentication?</h1>
            <h4 className='answer mb-4 text-xl py-5 leading-loose'>Ans: We are using firebase because Programming Hero teaching us this wonderful technology. Firebase gives us security to access the database from client side code. It can be seen can be seen as a server-less backend for your mobile apps, web apps, etc. It is a service provided by Google. t has many features like Realtime database, Cloud functions, Analytics, Crashlytics, Cloud Firestore, etc. So we use firebase.
                <br />
                There are many options to implement authentication. Such as: Parse, Back4App, AWS Amplify, Kuzzle, Couchbase, NativeScript, RxDB, Flutter etc. But the firebase is one of the best options for authentication. Because it supports passwords, phone numbers, popular federated identity, providers like Google, Facebook, Github, Twitter, Yahoo and many more.
            </h4>
            <h1 className='question text-4xl py-5'>Q3: What other services does firebase provide other than authentication?</h1>
            <h4 className='answer text-xl leading-loose'>Ans: There are many services firebase provide other than authentication that given below:<br />
                1. Hosting <br /> 2. Cloud Firestore <br />3. Realtime Database<br /> 4. Remote Config<br /> 5. Firebase ML<br /> 6. Cloud Functions <br /> 7. Cloud Messaging <br /> 8. Cloud Storage
            </h4>
        </div>
    );
};

export default Blog;