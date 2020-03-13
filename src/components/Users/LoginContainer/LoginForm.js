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
    <form onSubmit={onSubmit}>
      <div>
        <label>{t('login-form.email')} </label>
        <input
          type='email'
          onChange={onChange}
          name="email"
          value={email}
          placeholder={t('login-form.email-placeholder')}
        />
      </div>
      <div>
        <label>{t('login-form.password')} </label>
        <input
          type="password"
          onChange={onChange}
          name="password"
          value={password}
          placeholder={t('login-form.password-placeholder')}
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
