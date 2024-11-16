import React, { useEffect, useState } from 'react';
import { createSocketConnection } from '../services/socket';
import WidgetForm from './WidgetForm';

const Dashboard: React.FC = () => {
  const [socket, setSocket] = useState<any>(null);
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    const newSocket = createSocketConnection();
    setSocket(newSocket);

    newSocket.on('initialData', (data: any) => {
      setWidgets(data);
    });

    newSocket.on('widget:add', (newWidget: any) => {
        // @ts-ignore
      setWidgets((prev) => [...prev, newWidget]); 
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <WidgetForm addWidget={(widget) => {socket.emit('widget:add', widget)}} />
      <ul>
        {widgets.map((widget: any, index) => (
          <li key={index}>{widget.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
