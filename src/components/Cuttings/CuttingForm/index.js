import React from 'react';

export default function CuttingForm(props) {
  const {
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
        <h1>Post your cutting for swapping</h1>
      </div>
      <form onSubmit={onSubmit}>

        <div>
          <label>Plant name </label>
          <input
            type="text"
            onChange={onChange}
            name="name"
            value={name}
            placeholder="Plant name (scientific)"
          />
        </div>

        <div>
          <label>Photo </label>
          <input
            onChange={onChange}
            name="photo"
            value={photo}
            placeholder="Photo url"
          />
        </div>
        <div>
          <label>Description </label>
          <textarea
            type='text'
            onChange={onChange}
            name="description"
            value={description}
            placeholder="Description about the cutting"
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}
