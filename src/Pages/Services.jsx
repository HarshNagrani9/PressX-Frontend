import React, { Component } from 'react'
import './CSS/Services.css'

export default class Services extends Component {
  render() {
    return (
      <div>
        
        <div className="empty-box">
        <div className="bubble">
          <div className='bubble1'>FREE &nbsp; PICKUP &nbsp; DELIVERY</div>
          <div className='bubble2'><img src="./src/Components/assets/images/logo.png" alt="Logo" /></div>
        </div>
        
        <div className="tableOne">
          <h1>Retail Services</h1>
          <table style={{ borderCollapse: 'collapse', border: '3px solid rgb(236, 191, 77)' }}>
            <tr>
            <th style={{ border: '3px solid rgb(236, 191, 77)' , padding:'1%' }}>Wash and Cold Press (Fold Only)</th>              
            <th style={{border: '3px solid rgb(236, 191, 77)'}}>&nbsp;20/-&nbsp;</th>
            </tr>
            <tr>
              <th style={{ border: '3px solid rgb(236, 191, 77)', padding:'1%'  }}>Wash and Hot Press</th>
              <th style={{ border: '3px solid rgb(236, 191, 77)' }}>&nbsp;25/-&nbsp;</th>
            </tr>
            <tr>
              <th style={{ border: '3px solid rgb(236, 191, 77)', padding:'1%' }}>Steam Press</th>
              <th style={{ border: '3px solid rgb(236, 191, 77)' }}>&nbsp;25/-&nbsp;</th>
            </tr>
            <tr>
              <th style={{ border: '3px solid rgb(236, 191, 77)', padding:'1%' }}>DC</th>
              <th style={{ border: '3px solid rgb(236, 191, 77)' }}>&nbsp;40/-&nbsp;</th>
            </tr>
            <tr>
              <th style={{ border: '3px solid rgb(236, 191, 77)' , padding:'1%'}}>Roll Press</th>
              <th style={{ border: '3px solid rgb(236, 191, 77)' }}>&nbsp;50/-&nbsp;</th>
            </tr>
            <tr>
              <th style={{ border: '3px solid rgb(236, 191, 77)' , padding:'1%'}}>Single Bedsheet</th>
              <th style={{ border: '3px solid rgb(236, 191, 77)' }}>&nbsp;25/-&nbsp;</th>
            </tr>
            <tr>
              <th style={{ border: '3px solid rgb(236, 191, 77)', padding:'1%' }}>Double Bedsheet</th>
              <th style={{ border: '3px solid rgb(236, 191, 77)' }}>&nbsp;40/-&nbsp;</th>
            </tr>
          </table>
          </div>
        </div>




        <div className="empty-box2">
        <div className="bubblee">
          <div className='bubble3'>FREE &nbsp; PICKUP &nbsp; DELIVERY</div>
          <div className='bubble4'><img src="./src/Components/assets/images/logo.png" alt="Logo" /></div>
        </div>
        
        <div className="tableTwo">
          <h1>Wholesale Services</h1>
          <table style={{ borderCollapse: 'collapse', border: '3px solid rgb(236, 191, 77)' }}>
            <tr>
            <th style={{ border: '3px solid rgb(236, 191, 77)' , padding:'1%' }}>Uniform Deep Clean</th>              
            <th style={{border: '3px solid rgb(236, 191, 77)'}}>&nbsp;50/-&nbsp;</th>
            </tr>
            <tr>
              <th style={{ border: '3px solid rgb(236, 191, 77)', padding:'1%'  }}>Uniform Deep Clean + Iron</th>
              <th style={{ border: '3px solid rgb(236, 191, 77)' }}>&nbsp;18/-&nbsp;</th>
            </tr>
            <tr>
              <th style={{ border: '3px solid rgb(236, 191, 77)', padding:'1%' }}>Frill (Jhalar) Semi-Dry</th>
              <th style={{ border: '3px solid rgb(236, 191, 77)' }}>&nbsp;12/-&nbsp;</th>
            </tr>
            <tr>
              <th style={{ border: '3px solid rgb(236, 191, 77)', padding:'1%' }}>Frill (Jhalar) Full-Dry</th>
              <th style={{ border: '3px solid rgb(236, 191, 77)' }}>&nbsp;15/-&nbsp;</th>
            </tr>
            
          </table>
          </div>
        </div>




      </div>
      
      
    )
  }
}
