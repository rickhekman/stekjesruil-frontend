import React from 'react';
import { useTranslation } from 'react-i18next';

function SignupForm(props) {

  const { t } = useTranslation();

  const {
    onChange,
    onSubmit,
    values: {
      name,
      email,
      password
    }
  } = props;

  return (<div className="signupcontainer">
    <div className="signupcontainer__form">
      <div className="u-margin-bottom-medium">
        <h2 className="heading--secondary">{t('signup-form.title')}</h2>
      </div>
      <form onSubmit={onSubmit} className="form">
        <div className="form__group">
          <label htmlFor="username" className="form__label">{t('signup-form.username')} </label>
          <input
            className="form__input"
            id="username"
            type='text'
            onChange={onChange}
            name="name"
            value={name}
            placeholder={t('signup-form.username-placeholder')}
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="email" className="form__label">{t('signup-form.email')} </label>
          <input
            className="form__input"
            id="email"
            type='email'
            onChange={onChange}
            name="email"
            value={email}
            placeholder={t('signup-form.email-placeholder')}
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">{t('signup-form.password')} </label>
          <input
            className="form__input"
            id="password"
            type="password"
            onChange={onChange}
            name="password"
            value={password}
            placeholder={t('signup-form.password-placeholder')}
            required
          />
        </div>
        <div className="u-margin-top-big">
          <input type="submit" className="btn btn--form-blue" value={t('signup-form.submit')} />
        </div>
      </form>
    </div>

  </div>
  )
}

export default SignupForm;
