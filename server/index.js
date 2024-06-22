const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "server",
  database: "identificacao",
});

app.use(express.json());
app.use(cors());
  
  // Tabela: nome
  app.post('/api/nomes', (req, res) => {
    const { nome } = req.body;
    db.query('INSERT INTO tabela_nome (nome) VALUES (?)', [nome], (error, results) => {
      if (error) {
        console.error('Erro ao inserir nome:', error);
        res.status(500).json({ error: 'Erro interno ao cadastrar nome' });
      } else {
        console.log('Nome cadastrado com sucesso');
        res.status(201).json({ message: 'Nome cadastrado com sucesso' });
      }
    });
  });
  
  app.post('/api/nomes', (req, res) => {
    const { nome } = req.body;
    db.query('INSERT INTO tabela_nome (nome) VALUES (?)', [nome], (error, results) => {
      if (error) {
        console.error('Erro ao inserir nome:', error);
        res.status(500).json({ error: 'Erro interno ao cadastrar nome' });
      } else {
        console.log('Nome cadastrado com sucesso');
        res.status(201).json({ message: 'Nome cadastrado com sucesso' });
      }
    });
  });
  
  // Tabela: sexo
  app.post('/api/sexos', (req, res) => {
    const { sexo } = req.body;
    db.query('INSERT INTO tabela_sexo (sexo) VALUES (?)', [sexo], (error, results) => {
      if (error) {
        console.error('Erro ao inserir sexo:', error);
      } else {
        console.log('Sexo cadastrado com sucesso');
        res.status(201).json({ message: 'Sexo cadastrado com sucesso' });
      }
    });
  });

  app.get('/api/sexos', (req, res) => {
    db.query('SELECT * FROM tabela_sexo', (error, results) => {
      if (error) {
        console.error('Erro ao buscar sexos:', error);
        res.status(500).json({ error: 'Erro interno ao buscar sexos' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  // Tabela: cpff
  app.post('/api/cpfs', (req, res) => {
    const { cpf } = req.body;
    db.query('INSERT INTO tabela_cpf (cpf) VALUES (?)', [cpf], (error, results) => {
      if (error) {
        console.error('Erro ao inserir CPF:', error);
        res.status(500).json({ error: 'Erro interno ao cadastrar CPF' });
      } else {
        console.log('CPF cadastrado com sucesso');
        res.status(201).json({ message: 'CPF cadastrado com sucesso' });
      }
    });
  });
  
  app.get('/api/cpfs', (req, res) => {
    db.query('SELECT * FROM tabela_cpf', (error, results) => {
      if (error) {
        console.error('Erro ao buscar CPFs:', error);
        res.status(500).json({ error: 'Erro interno ao buscar CPFs' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  // Tabela: estado
  app.post('/api/estados', (req, res) => {
    const { estado } = req.body;
    db.query('INSERT INTO tabela_estado (estado) VALUES (?)', [estado], (error, results) => {
      if (error) {
        console.error('Erro ao inserir estado:', error);
        res.status(500).json({ error: 'Erro interno ao cadastrar estado' });
      } else {
        console.log('Estado cadastrado com sucesso');
        res.status(201).json({ message: 'Estado cadastrado com sucesso' });
      }
    });
  });
  
  app.get('/api/estados', (req, res) => {
    db.query('SELECT * FROM tabela_estado', (error, results) => {
      if (error) {
        console.error('Erro ao buscar estados:', error);
        res.status(500).json({ error: 'Erro interno ao buscar estados' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  // Tabela: altura
  app.post('/api/alturas', (req, res) => {
    const { altura } = req.body;
    db.query('INSERT INTO tabela_altura (altura) VALUES (?)', [altura], (error, results) => {
      if (error) {
        console.error('Erro ao inserir altura:', error);
        res.status(500).json({ error: 'Erro interno ao cadastrar altura' });
      } else {
        console.log('Altura cadastrada com sucesso');
        res.status(201).json({ message: 'Altura cadastrada com sucesso' });
      }
    });
  });
  
  app.get('/api/alturas', (req, res) => {
    db.query('SELECT * FROM tabela_altura', (error, results) => {
      if (error) {
        console.error('Erro ao buscar alturas:', error);
        res.status(500).json({ error: 'Erro interno ao buscar alturas' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  // Tabela: peso
  app.post('/api/pesos', (req, res) => {
    const { peso } = req.body;
    db.query('INSERT INTO tabela_peso (peso) VALUES (?)', [peso], (error, results) => {
      if (error) {
        console.error('Erro ao inserir peso:', error);
        res.status(500).json({ error: 'Erro interno ao cadastrar peso' });
      } else {
        console.log('Peso cadastrado com sucesso');
        res.status(201).json({ message: 'Peso cadastrado com sucesso' });
      }
    });
  });
  
  app.get('/api/pesos', (req, res) => {
    db.query('SELECT * FROM tabela_peso', (error, results) => {
      if (error) {
        console.error('Erro ao buscar pesos:', error);
        res.status(500).json({ error: 'Erro interno ao buscar pesos' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  // Tabela: raca
  app.post('/api/racas', (req, res) => {
    const { raca } = req.body;
    db.query('INSERT INTO tabela_raca (raca) VALUES (?)', [raca], (error, results) => {
      if (error) {
        console.error('Erro ao inserir raça:', error);
        res.status(500).json({ error: 'Erro interno ao cadastrar raça' });
      } else {
        console.log('Raça cadastrada com sucesso');
        res.status(201).json({ message: 'Raça cadastrada com sucesso' });
      }
    });
  });
  
  app.get('/api/racas', (req, res) => {
    db.query('SELECT * FROM tabela_raca', (error, results) => {
      if (error) {
        console.error('Erro ao buscar raças:', error);
        res.status(500).json({ error: 'Erro interno ao buscar raças' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  // Tabela: telefone
  app.post('/api/telefones', (req, res) => {
    const { telefone } = req.body;
    db.query('INSERT INTO tabela_telefone (telefone) VALUES (?)', [telefone], (error, results) => {
      if (error) {
        console.error('Erro ao inserir telefone:', error);
        res.status(500).json({ error: 'Erro interno ao cadastrar telefone' });
      } else {
        console.log('Telefone cadastrado com sucesso');
        res.status(201).json({ message: 'Telefone cadastrado com sucesso' });
      }
    });
  });
  
  app.get('/api/telefones', (req, res) => {
    db.query('SELECT * FROM tabela_telefone', (error, results) => {
      if (error) {
        console.error('Erro ao buscar telefones:', error);
        res.status(500).json({ error: 'Erro interno ao buscar telefones' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  // Tabela: email
  app.post('/api/emails', (req, res) => {
    const { email } = req.body;
    db.query('INSERT INTO tabela_email (email) VALUES (?)', [email], (error, results) => {
      if (error) {
        console.error('Erro ao inserir email:', error);
        res.status(500).json({ error: 'Erro interno ao cadastrar email' });
      } else {
        console.log('Email cadastrado com sucesso');
        res.status(201).json({ message: 'Email cadastrado com sucesso' });
      }
    });
  });
  
  app.get('/api/emails', (req, res) => {
    db.query('SELECT * FROM tabela_email', (error, results) => {
      if (error) {
        console.error('Erro ao buscar emails:', error);
        res.status(500).json({ error: 'Erro interno ao buscar emails' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  // Tabela: tipo_sanguineo
  app.post('/api/tipossanguineos', (req, res) => {
    const { tipo_sanguineo } = req.body;
    db.query('INSERT INTO tabela_tipo_sanguineo (tipo_sanguineo) VALUES (?)', [tipo_sanguineo], (error, results) => {
      if (error) {
        console.error('Erro ao inserir tipo sanguíneo:', error);
        res.status(500).json({ error: 'Erro interno ao cadastrar tipo sanguíneo' });
      } else {
        console.log('Tipo sanguíneo cadastrado com sucesso');
        res.status(201).json({ message: 'Tipo sanguíneo cadastrado com sucesso' });
      }
    });
  });
  
  app.get('/api/tipossanguineos', (req, res) => {
    db.query('SELECT * FROM tabela_tipo_sanguineo', (error, results) => {
      if (error) {
        console.error('Erro ao buscar tipos sanguíneos:', error);
        res.status(500).json({ error: 'Erro interno ao buscar tipos sanguíneos' });
      } else {
        res.status(200).json(results);
      }
    });
  });

app.listen(3001, () => {
    console.log("rodando na porta 3001");
  });