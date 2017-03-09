import React from 'react';
import reactjs from '../../img/reactjs.jpg';
import webpack2 from '../../img/webpack2.jpg';
import reactrouter4 from '../../img/reactrouter4.jpg';
import bootstrap4 from '../../img/bootstrap4.jpg';



const Section = () => {
    return (

        <div className="row">
            <div className="col-md-6 col-lg-3">
                <div className="card">
                    <img src={reactjs} className="card-img-top img-fluid" />
                    <div className="card-block">
                        <h3 className="card-title">ReactJS</h3>
                        <p>ReactJS/Redux using the ES2015 (ES6) syntax.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="card">
                    <img src={webpack2} className="card-img-top img-fluid" />
                    <div className="card-block">
                        <h3 className="card-title">Webpack 2</h3>
                        <p>A module bundler for JavaScript apps.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="card">
                    <img src={reactrouter4} className="card-img-top img-fluid" />
                    <div className="card-block">
                        <h3 className="card-title">React-Router 4</h3>
                        <p>Declarative routing for ReactJS apps.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="card">
                    <img src={bootstrap4} className="card-img-top img-fluid" />
                    <div className="card-block">
                        <h3 className="card-title">Bootstrap 4</h3>
                        <p>A framework styling apps for all screen sizes.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};



export default Section;
