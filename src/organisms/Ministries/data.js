import React from "react";

export const ministries = [
  {
    title: {
      short: "MEDDI",
      full: "MEDDI - Ministério da Escola Dominical e Discipulado Internacional",
    },
    description: {
      short: "Ministério da Escola Dominical e Discipulado Internacional",
      full: "Fomos enviados ao mundo e respondemos ao chamado de Cristo. Somos capacitados pelo Espírito Santo, para proclamar o Evangelho da Graça e cooperar ativamente na edificação da Igreja e na expansão do Reino Eterno do SENHOR.",
    },
    responsible: "Pastor Denis Alves",
    contact: "mailto:prdenisalves1988@gmail.com",
  },
  {
    title: {
      short: "Escola Teológica",
      full: "Escola Teológica",
    },
    description: {
      short: "Estudo Bíblico para Formação de Obreiros e Líderes",
      full: (
        <article>
          <p className="font-bold">
            Aperfeiçoando os santos para a obra do Senhor. (Efésios 4:12)
          </p>
          <ul>
            <li>Teologia Arminio-Wesleyana</li>
            <li>Presencial: Terças-feiras</li>
            <li>On-line: Quintas-feiras Das 19:30 às 22:30</li>
            <li>
              Tempo de duração: Dois anos - {new Date().getFullYear()}/
              {new Date().getFullYear() + 1}
            </li>
          </ul>
        </article>
      ),
    },
    responsible: "Pastor Denis Alves",
    contact: "mailto:prdenisalves1988@gmail.com",
  },
  {
    title: {
      short: "MNI",
      full: "MNI - Missões Nazarenas Internacionais",
    },
    description: {
      short: "Missões Nazarenas Internacionais",
      full: (
        <article>
          <p>
            É através da missões Nazarenas Internacionais (MNI) que podemos
            ativar, estimular e acelerar a missão local. Nosso propósito é levar
            as boas novas de uma forma simples e objetiva para aqueles que ainda
            não compreenderam a mensagem da salvação. O desafio da grande
            comissão é: Vão e façam discípulos em todas as nações, batizando em
            nome do Pai, do Filho e do Espírito Santo.
          </p>
        </article>
      ),
    },
    responsible: "Almino Oliveira",
    contact: "tel:+5511980134569",
  },
  {
    title: {
      short: "Naza Kids",
      full: "Naza Kids",
    },
    description: {
      full: (
        <article>
          <p>
            Nós do Ministério Infantil, somos responsáveis pelo ensino voltado
            às crianças. Além disso, temos a função de ensinar a palavra de Deus
            para os pequeninos. Durante nossa escola Bíblica e culto infantil,
            interagimos através da oração, histórias bíblicas, louvor,
            testemunhos, atividades e brincadeiras. Tudo isso para o crescimento
            e desenvolvimento da criança no Reino de Deus. Pois os pequenos de
            hoje, serão o futuro da igreja, por isso trabalhamos com muito amor
            e dedicação.
          </p>
          <p>
            O departamento infantil, trabalha com as crianças de 3 a 11 anos
          </p>
          <p>
            Atuação: Área do louvor, Culto infantil com versículos e histórias
            bíblicas
          </p>
        </article>
      ),
    },
    responsible: "Sirlene Paradela",
  },
  {
    title: {
      short: "Ministério escolhi Amar",
      full: "Ministério escolhi Amar",
    },
    description: {
      full: (
        <article>
          <p>
            O nome do ministério é esse, pois entendemos que o amor não é um
            sentimento, mas sim uma decisão, pois, mesmo com todas as falhas da
            outra pessoa, você decidiu amá-la.
          </p>
          <p>
            Nossa principal atuação é na integração entre casais SEM filhos.
            Nossas ações são sempre voltadas para a família, por isso temos
            alguns eventos como a Escola para Dois e Família em dia.
          </p>
          <p>Todos para a família ❤️</p>
        </article>
      ),
    },
    responsible: "Damaris Santos e Fernando Oliveira",
  },
  {
    title: {
      short: "Ministério de Mulheres Yanni",
      full: "Ministério de Mulheres Yanni",
    },
    description: {
      full: (
        <article>
          <p>
            O ministério Yanni é formado de mulheres que são presente de Deus.
            Trabalhamos com empatia e sororidade, uma ajudando a outra no
            sentido material e espiritual. Somos mulheres de oração que têm sede
            de buscar a Deus e seus propósitos.
          </p>
          <p>
            Temos encontros mensais alternados que são rodas de bate papo e
            cultos toda última sexta feira de cada mês as 20hs.
          </p>
        </article>
      ),
    },
    responsible: "Sheila Santos",
    contact: "tel:+5511998089137",
  },
];
