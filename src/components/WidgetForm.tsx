import React, { useState } from 'react';

type WidgetFormProps = {
  addWidget: (widget: { title: string; description: string; type: string; updatedBy: string }) => void;
};

const WidgetForm: React.FC<WidgetFormProps> = ({ addWidget }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('note');
  const [updatedBy, setUpdatedBy] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addWidget({ title, description, type, updatedBy });
    setTitle('');
    setDescription('');
    setUpdatedBy('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Widget</h2>
      <div>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="note">Note</option>
          <option value="graph">Graph</option>
          <option value="task">Task</option>
        </select>
      </div>
      <div>
        <label>Updated By:</label>
        <input value={updatedBy} onChange={(e) => setUpdatedBy(e.target.value)} required />
      </div>
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default WidgetForm;
