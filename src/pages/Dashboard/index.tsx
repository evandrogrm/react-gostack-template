import React, { FormEvent, useState } from 'react';
import api from '../../services/api';
import { Title } from './styles';

interface Example {
  id: string;
}

const Dashboard: React.FC = () => {
  const [temps, setTemps] = useState<Example[]>([]);

  async function getExamples(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const response = await api.get<Example>(`examples/${temps}`);
    const example = response.data;
    setTemps([...temps, example]);
  }

  return <Title>Dashboard</Title>;
};

export default Dashboard;
