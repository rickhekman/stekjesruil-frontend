import React from 'react';
import { withTranslation } from 'react-i18next';

function CuttingForm(props) {

  const {
    t,
    onChange,
    onSubmit,
    values: {
      name,
      photo,
      description
    }
  } = props;

  return (
    <div>
      <div>
        <h1>{t('cutting-form.title')}</h1>
      </div>
      <form onSubmit={onSubmit}>

        <div>
          <label>{t('cutting-form.name')} </label>
          <input
            type="text"
            onChange={onChange}
            name="name"
            value={name}
            placeholder={t('cutting-form.name-placeholder')}
          />
        </div>

        <div>
          <label>{t('cutting-form.photo')} </label>
          <input
            onChange={onChange}
            name="photo"
            value={photo}
            placeholder="Photo url"
          />
        </div>
        <div>
          <label>{t('cutting-form.description')} </label>
          <textarea
            type='text'
            onChange={onChange}
            name="description"
            value={description}
            placeholder={t('cutting-form.description-placeholder')}
          />
        </div>
        <input type="submit" value={t('cutting-form.submit')} />
      </form>
    </div>
  )
}

export default withTranslation()(CuttingForm)
