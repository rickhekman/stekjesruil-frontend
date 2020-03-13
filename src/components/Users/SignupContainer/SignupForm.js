import React from 'react';
import { withTranslation } from 'react-i18next';

function SignupForm(props) {
  const {
    t,
    onChange,
    onSubmit,
    values: {
      name,
      email,
      password
    }
  } = props;

  return (<div>
    <div>
      <h1>{t('signup-form.title')}</h1>
    </div>
    <form onSubmit={onSubmit}>
      <div>
        <label>{t('signup-form.username')} </label>
        <input
          type='text'
          onChange={onChange}
          name="name"
          value={name}
          placeholder={t('signup-form.username-placeholder')}
        />
      </div>
      <div>
        <label>{t('signup-form.email')} </label>
        <input
          type='email'
          onChange={onChange}
          name="email"
          value={email}
          placeholder={t('signup-form.email-placeholder')}
        />
      </div>
      <div>
        <label>{t('signup-form.password')} </label>
        <input
          type="password"
          onChange={onChange}
          name="password"
          value={password}
          placeholder={t('signup-form.password-placeholder')}
        />
      </div>
      <div>
        <input type="submit" value={t('signup-form.submit')} />
      </div>
    </form>
  </div>
  )
}

export default withTranslation()(SignupForm)
