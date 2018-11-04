import React, { Component } from 'react';
import './footer.style.css';
import { Link } from 'gatsby';



class Footer extends Component {
  state = { 
    contributors: [
      {
        name: 'aRtoo',
        link: 'https://github.com/artoodeeto'
      },
      {
        name: 'aRtoo',
        link: 'https://github.com/artoodeeto'
      },
      {
        name: 'aRtoo',
        link: 'https://github.com/artoodeeto'
      },
      {
        name: 'aRtoo',
        link: 'https://github.com/artoodeeto'
      },
    ]
   }
  render() { 
    const {contributors} = this.state;
    return ( <footer className='footer-container'>
      <div>
        <span className='copyright'>@CopyRight JAMsnack 2018</span>
        {/* <div className='contributor-container'>
         <b>Contributors:</b>
          <ul className='unordered-list-footer'>
            {contributors.map( (c,i) => (
              <li key={i}>
                <a href={c.link} target='_blank'>{c.name}</a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </footer> );
  }
}
 
export default Footer;