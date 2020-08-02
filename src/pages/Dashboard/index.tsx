import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositorio" type="text" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/2052767?s=460&u=55ece77c1db891da58f7f02c6a3c3970ecaef6ab&v=4"
            alt="Felipe Fonseca"
          />
          <div>
            <strong>felipefonsecadev/gobarber-backend</strong>
            <p>Backend do app GoBarber</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/2052767?s=460&u=55ece77c1db891da58f7f02c6a3c3970ecaef6ab&v=4"
            alt="Felipe Fonseca"
          />
          <div>
            <strong>felipefonsecadev/gobarber-backend</strong>
            <p>Backend do app GoBarber</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/2052767?s=460&u=55ece77c1db891da58f7f02c6a3c3970ecaef6ab&v=4"
            alt="Felipe Fonseca"
          />
          <div>
            <strong>felipefonsecadev/gobarber-backend</strong>
            <p>Backend do app GoBarber</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
