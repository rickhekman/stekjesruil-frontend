import React from 'react';
import { withTranslation } from 'react-i18next';

function LoginForm(props) {
  const {
    t,
    onChange,
    onSubmit,
    values: {
      email,
      password
    }
  } = props;

  return (<div className="logincontainer u-margin-top-medium">
    <div className="logincontainer__form">
      <div className="u-margin-bottom-medium">
        <h2 className="heading--secondary">{t('login-form.title')}</h2>
      </div>
      <form onSubmit={onSubmit} className="form">

        <div className="form__group">
          <label for="email" className="form__label">{t('login-form.email')} </label>
          <input
            className="form__input"
            id="email"
            type='email'
            onChange={onChange}
            name="email"
            value={email}
            placeholder={t('login-form.email-placeholder')}
            required
          />
        </div>

        <div className="form__group">
          <label for="password" className="form__label">{t('login-form.password')} </label>
          <input
            className="form__input"
            id="password"
            type="password"
            onChange={onChange}
            name="password"
            value={password}
            placeholder={t('login-form.password-placeholder')}
            required
          />
        </div>
        <div className="u-margin-top-big">
          <input type="submit" className="btn btn--form-blue" value={t('login-form.submit')} />
        </div>
      </form>
    </div>
  </div>
  )
}

export default withTranslation()(LoginForm)
