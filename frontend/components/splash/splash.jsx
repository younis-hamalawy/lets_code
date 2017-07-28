import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  render() {
    return (
      <div className="splash-container">
          <div className="splash-main">
            <div className="transbox1">
            <div className="first">
              <div className="everyone">
                <h1>Everyone is interesting</h1>
              </div>
            </div>

            <div className="first">
              <div className="screen">
                <h2>But you don’t discover that when you’re staring at a screen</h2>
              </div>
            </div>


            <div className="first">
              <div className="lets-code-button">
                { this.props.session.currentUser ? <Link className='host-button' to={'/cities'}>Let's code together!</Link> : <Link className='host-button' to={'/signUp'}>Let's code together!</Link>}
              </div>
            </div>
          </div>
        </div>
        <div className="first-container-content">
          <div className="info-container">
            <div className="info">
              <div className="first-info">
                <h2>Show up for a coding meetup</h2>
                <p>You and a few others join a host at a cafe</p>
              </div>
              <div className="first-info">
                <h2>Have a real conversation</h2>
                <p>You code for two hours</p>
              </div>
              <div className="first-info">
                <h2>See what happens</h2>
                <p>That's it. No strings attached!</p>
              </div>
            </div>
          </div>
          <div className="splash-body">
            <h3 className="why">SO WHY ARE THOUSANDS OF PEOPLE DOING IT?</h3>
            <div className="entry">
              <img className="splash-image" src={"https://res.cloudinary.com/flying-monkey/image/upload/v1501218843/3_copy_xjycpj.png"} alt="splash-image" />
              <div className="weird">
                <h2>It's weird</h2>
                <p>Everyone is stepping a little out of their comfort zone. This makes it so much easier to actually learn something unexpected. Because open minds are a prerequisite around here</p>
              </div>
            </div>
            <div className="entry">
              <div className="weird">
                <h2>We won't meet otherwise</h2>
                <p>In all likelihood, our paths won’t cross for any reason. So often, we only meet people through work, school, or friends of friends. And even then, it’s questionable. So basically, we manufacture serendipity</p>
              </div>
              <img className="splash-image" src={"http://res.cloudinary.com/flying-monkey/image/upload/v1501218843/2_copy_eatysw.png"} alt="cartoon-figures" />
            </div>
            <div className="entry">
              <img className="splash-image" src={"http://res.cloudinary.com/flying-monkey/image/upload/v1501218843/1_copy_noaeuj.png"} alt="cartoon-figures" />
              <div className="weird">
                <h2>Your hands are made for high fiving!</h2>
                <p>And your eyes are made…for eye contact! Real humans are so much cooler than their tweets or Instagram pictures. Let's Code has real humans! nofilter!</p>
              </div>
            </div>
            <div className="lets-code-button">
              { this.props.session.currentUser ? <Link className='host-button' to={'/cities'}>LET'S CODE TOGETHER!</Link> : <Link className='host-button' to={'/signUp'}>LET'S CODE TOGETHER!</Link>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;
