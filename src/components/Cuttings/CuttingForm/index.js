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

  return (<div className="cuttingsform-container">
    <div className="cuttingsform u-margin-top-medium">
      <div className="createcuttings">
        <div className="createcuttings__form">

          <div className="u-margin-bottom-medium">
            <h2 className="heading--secondary">{t('cutting-form.title')}</h2>
          </div>

          <form onSubmit={onSubmit} className="form">

            <div className="form__group">
              <label for="name" className="form__label">{t('cutting-form.name')} </label>
              <input
                className="form__input"
                id="name"
                type="text"
                onChange={onChange}
                name="name"
                value={name}
                placeholder={t('cutting-form.name-placeholder')}
                required
              />
            </div>

            <div className="form__group">
              <label for="photo" className="form__label">{t('cutting-form.photo')} </label>
              <input
                className="form__input"
                id="photo"
                onChange={onChange}
                name="photo"
                value={photo}
                placeholder="Photo url"
                required
              />
            </div>

            <div className="form__group">
              <label for="description" className="form__label">{t('cutting-form.description')} </label>
              <textarea
                className="form__input"
                id="photo"
                type='text'
                onChange={onChange}
                name="description"
                value={description}
                placeholder={t('cutting-form.description-placeholder')}
                required
              />
            </div>

            <div className="u-margin-top-big">
              <input type="submit" className="btn btn--form-blue" value={t('cutting-form.submit')} />
            </div>

          </form>

        </div>
      </div>
    </div>


  </div>
  )
}

export default withTranslation()(CuttingForm)
