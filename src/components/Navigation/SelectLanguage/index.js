import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'

 class SelectLanguage extends Component {
   
     state = {
       language: ''
     }
   

  render()  {

     const { i18n } = this.props

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <div>
      <form>
        <select value={this.setState.language}>
          <option value="Dutch">{changeLanguage('nl')}Dutch</option>
          <option value="English">{changeLanguage('en')}English</option>
          </select>
        </form>
      </div>
    )
  }
}


export default withTranslation()(SelectLanguage)