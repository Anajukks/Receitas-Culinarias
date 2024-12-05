/*
    PÁGINA DE FUNÇÕES HTTP (API)
*/

// Funções de Usuários
export async function login(email, senha) {
  const response = await fetch("http://127.0.0.1:8000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json " },
    body: JSON.stringify({ email, senha }),
  });
  const data = await response.json();
  return data;
}

export async function register(nome, email, senha) {
  const response = await fetch("http://127.0.0.1:8000/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json " },
    body: JSON.stringify({ nome, email, senha }),
  });
  const data = await response.json();
  return data;
}

export async function logout(token) {
  const tokenBearer = `Bearer ${token}`;
  const response = await fetch("http://127.0.0.1:8000/api/logout", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: tokenBearer,
    },
  });

  const data = await response.json();
  return data; // Sucesso
}

export async function retrieveUser(user_id) {
  const response = await fetch(`http://127.0.0.1:8000/api/usuarios/${user_id}`);
  const data = await response.json();
  return data;
}

export async function isAuthenticated(user_id, token) {
  // Verificar se usuário está autenticado
  const response = await fetch(`http://127.0.0.1:8000/api/isAuthenticated`, {
    method: "POST",
    headers: { "Content-Type": "application/json " },
    body: JSON.stringify({ user_id, token }),
  });
  const data = await response.json();
  return data;
}

// Funções de Receitas

export async function retrieveReceita(receita_id) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/receitas/${receita_id}`
  );
  const data = await response.json();
  return data;
}

export async function createReceita(receita, token) {
  const tokenBearer = `Bearer ${token}`;
  const response = await fetch(`http://127.0.0.1:8000/api/receitas`, {
    method: "POST",
    headers: {
      Authorization: tokenBearer,
      Accept: "application/json",
    },
    body: receita,
  });
  const data = await response.json();
  return data;
}

export async function updateReceita(receita, receita_id, token) {
  const tokenBearer = `Bearer ${token}`;
  const response = await fetch(
    `http://127.0.0.1:8000/api/receitas/${receita_id}?_method=PUT`,
    {
      method: "POST",
      headers: {
        Authorization: tokenBearer,
        Accept: "application/json",
      },
      body: receita,
    }
  );
  const data = await response.json();
  return data;
}

export async function retrieveCategorias(categoria) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/receitas/categoria/${categoria}`
  );
  const data = await response.json();
  return data;
}

export async function retrieveReceitaQuery(query) {
  const response = await fetch(`http://127.0.0.1:8000/api/receitas?${query}`);
  const data = await response.json();
  return data;
}

export async function retrieveDestaque() {
  const response = await fetch("http://127.0.0.1:8000/api/receitas/destaque");
  const data = await response.json();
  return data;
}

export async function searchReceita(query) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/receitas?pesquisa=${query}`
  );
  const data = await response.json();
  return data;
}

// Funções de Avaliação

export async function retrieveMediaDeAvaliacao(receita_id) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/avaliacoes/${receita_id}`
  );
  const data = await response.json();
  return data;
}

export async function createAvaliacao(avaliacao, token) {
  const tokenBearer = `Bearer ${token}`;
  const response = await fetch("http://127.0.0.1:8000/api/avaliacoes", {
    method: "POST",
    headers: {
      Authorization: tokenBearer,
      "Content-Type": "appplication/json",
      Accept: "application/json",
    },
    body: avaliacao,
  });
  const data = await response.json();
  return data;
}

export async function updateAvaliacao(
  avaliacao,
  usuario_id,
  receita_id,
  token
) {
  const tokenBearer = `Bearer ${token}`;
  const response = await fetch(
    `http://127.0.0.1:8000/api/avaliacoes/${usuario_id}/${receita_id}`,
    {
      method: "PUT",
      headers: {
        Authorization: tokenBearer,
        "Content-Type": "appplication/json",
        Accept: "application/json",
      },
      body: avaliacao,
    }
  );
  const data = await response.json();
  return data;
}

export async function showAvaliacao(usuario_id, receita_id) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/avaliacoes/${usuario_id}/${receita_id}`
  );
  const data = await response.json();
  return data;
}

// Funções de Comentários

export async function retrieveComentariosDaReceita(receita_id) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/comentarios/${receita_id}`
  );
  const data = await response.json();
  return data;
}

export async function createComentario(comentario, token) {
  const tokenBearer = `Bearer ${token}`;
  const response = await fetch("http://127.0.0.1:8000/api/comentarios", {
    method: "POST",
    headers: {
      Authorization: tokenBearer,
      "Content-Type": "appplication/json",
      Accept: "application/json",
    },
    body: comentario,
  });
  const data = await response.json();
  return data;
}

export async function updateComentario(
  comentario,
  usuario_id,
  receita_id,
  token
) {
  const tokenBearer = `Bearer ${token}`;
  const response = await fetch(
    `http://127.0.0.1:8000/api/comentarios/${usuario_id}/${receita_id}`,
    {
      method: "PUT",
      headers: {
        Authorization: tokenBearer,
        "Content-Type": "appplication/json",
        Accept: "application/json",
      },
      body: comentario,
    }
  );
  const data = await response.json();
  return data;
}

export async function showComentario(usuario_id, receita_id) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/comentarios/${usuario_id}/${receita_id}`
  );
  const data = await response.json();
  return data;
}

// Funções de Local Storage
export function setStorageUser(user_id, token) {
  localStorage.setItem("id", user_id);
  localStorage.setItem("authToken", token);
}

export function getStorageUser(user_id, token) {
  user_id = localStorage.getItem("id");
  token = localStorage.getItem("authToken");
  return { user_id, token };
}

export function clearStorageUser() {
  localStorage.clear();
}