import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import "../styles.css"



export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <section>
         <Header />
          <div className="jumbotron">
            <div className="container text-center py-5">
              <h1 style={{color:" #a6a6a6"}} className="display-4">Welcome to NilConnect</h1>
              <p style={{color:"white"}} className="lead">A Video Conferencing Platform for 2021</p>
              <div className="mt-4">
                <Link className="btn btn-primary px-5 mr-3" to="/signup">Create New Account</Link>
                <Link className="btn btn-info px-5" to="/login">Login to Your Account</Link>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    )
  }
}
