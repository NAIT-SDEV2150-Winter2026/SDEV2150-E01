import { useState } from 'react';

import { Form, useNavigate } from 'react-router';

export default function ResourceForm({
  initialData,
  isEditing,
  isSubmitting
}) {
  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    // name & type are fields on the input elements
    // *so are* value/check, except either one is used depending on textfield vs. checkbox

    setFormData(
      (prev) => ({
        ...prev, // take every previous property:value in existing form data,
        [name]: type === 'checkbox' ? checked : value,
        // my way of dynamically handling input changes for text & checkbox in one go
      })
    )
  }


  return (
    <Form method="post" className="space-y-4">

      <div className="space-y-1">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
        />
      </div>

      <button
        type="submit"
        className="rounded bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? 'Saving...'
          : isEditing
            ? 'Update Resource'
            : 'Add Resource'}
      </button>

    </Form>
  );
}