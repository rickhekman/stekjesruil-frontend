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

  return (<div>
    <div>
      <h1>{t('login-form.title')}</h1>
    </div>
    <form onSubmit={onSubmit} className="form">
      <div>
        <label for="email">{t('login-form.email')} </label>
        <input
          id="email"
          type='email'
          onChange={onChange}
          name="email"
          value={email}
          placeholder={t('login-form.email-placeholder')}
          required
        />
      </div>
      <div>
        <label for="password">{t('login-form.password')} </label>
        <input
          id="password"
          type="password"
          onChange={onChange}
          name="password"
          value={password}
          placeholder={t('login-form.password-placeholder')}
          required
        />
      </div>
      <div>
        <input type="submit" value={t('login-form.submit')} />
      </div>
    </form>
  </div>
  )
}

export default withTranslation()(LoginForm)
