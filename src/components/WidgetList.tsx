import React from 'react';

type Widget = {
  _id: string;
  title: string;
  description: string;
  type: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
};

type WidgetListProps = {
  widgets: Widget[];
};

const WidgetList: React.FC<WidgetListProps> = ({ widgets }) => {
  return (
    <div>
      <h2>Widget List</h2>
      {widgets.length > 0 ? (
        <ul>
          {widgets.map((widget) => (
            <li key={widget._id}>
              <h3>{widget.title}</h3>
              <p>{widget.description}</p>
              <p>Type: {widget.type}</p>
              <p>Updated By: {widget.updatedBy}</p>
              <p>Created At: {new Date(widget.createdAt).toLocaleString()}</p>
              <p>Updated At: {new Date(widget.updatedAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No widgets available.</p>
      )}
    </div>
  );
};

export default WidgetList;
