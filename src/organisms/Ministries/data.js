import React from "react";
import nazateen from "images/ministries/adolescentes.png";
import casadosParaSempre from "images/ministries/casados-para-sempre.png";
import escolhiAmar from "images/ministries/escolhi-amar.png";
import mulheresYanni from "images/ministries/mulheres-yanni.png";
import musica from "images/ministries/musica.png";
import jni from "images/ministries/jni.png";

export const ministries = [
  {
    image: jni,
    title: {
      short: "JNI",
      full: "JNI - Jovens Nazarenos Internacional",
    },
    description: {
      short:
        "Integrar, treinar e capacitar jovens para o envolvimento no reino de Deus",
      full: "O ministério JNI existe para atrair jovens e integra-los no serviço do reino de Deus, envolvendo no evangelismo levando o evangelho do reino, no discipulado aprendendo a importância dos jovens no trabalho cristão e também no preparo para liderança acreditando que os jovens serão os futuros líderes da igreja de amanhã.",
    },
    responsible: "Pastor Alexandre",
    contact: "https://wa.me/5511984672997",
  },
  {
    image: nazateen,
    title: {
      short: "Nazateen",
      full: "Nazateen - Ministério de adolescentes",
    },
    description: {
      short: "Cheio da alegria que vem do Senhor",
      full: "Uma galera cheia de energia e disposição. Nossa missão é caminharmos juntos para o Cristo!!! O céu é o meu lugar.",
    },
    responsible: "Matheus e Michelle",
    contact: "https://wa.me/5511976760686",
  },
  {
    image: escolhiAmar,
    title: {
      short: "MEA",
      full: "MEA - Ministério escolhi Amar",
    },
    description: {
      // They provided "Casados" as the title, but it's not clear what it means. We should get in touch with them to clarify.
      short: "Ministério Escolhi Amar",
      full: "Casais sem filhos, com o propósito de  compartilhar experiências e aprender a luz da palavra de Deus a construção para uma família saudável!!",
    },
    responsible: "Damaris e Fernando",
    contact: null,
  },
  {
    image: casadosParaSempre,
    title: {
      short: "CPS",
      full: "Casados para Sempre",
    },
    description: {
      // not provided
      short: "Casados Para Sempre",
      full: "O Casados pra Sempre é um curso da Plataforma do Marriage Ministries Internacional - MMI fundado em 1983, por Mike e Marilyn Phillipps nos EUA. Tem por objetivo o fortalecimento e a restauração do relacionamento entre marido e esposa pelo ensino da palavra.",
    },
    responsible: "Henrique e Joana Nascimento",
    contact: "https://wa.me/5511948218263",
  },
  {
    image: mulheresYanni,
    title: {
      short: "Ministério Yanni",
      full: "Ministério de Mulheres Yanni - Presente de Deus",
    },
    description: {
      // not provided
      short: "Ministério de Mulheres",
      full: "Departamento feminino da Igreja do Nazareno Barueri, no qual promove encontros mensais em nossa igreja para mulheres de todas as faixas etárias, a fim de compartilhar testemunhos, aconselhamentos, dicas, intercessões e o mais importante: estarmos cada vez mais perto do Senhor através do amor e união entre nós.",
    },
    responsible: "Vanessa Azevedo e Juliana Jalaim",
    // not provided
    contact: null,
  },
  {
    image: musica,
    title: {
      short: "Música",
      full: "Misterio de louvor e Orquestra e formação de músicos",
    },
    description: {
      // They provided "Adoração" as the title, but it's not clear what it means. We should get in touch with them to clarify.
      short: "Louvor, Orquestra e formação de músicos",
      full: "Ministério de musica tem a missão de capacitar músicos e aplicar talento natural na obra de Deus, para ensinar verdades eternas dentro da Igreja através da música.",
    },
    responsible: "Maestro Marcos Melo",
    contact: "https://wa.me/5511989301207",
  },
  {
    title: {
      short: "MEDDI",
      full: "MEDDI - Ministério da Escola Dominical e Discipulado Internacional",
    },
    description: {
      short: "Escola Dominical e Discipulado Internacional",
      full: "Fomos enviados ao mundo e respondemos ao chamado de Cristo. Somos capacitados pelo Espírito Santo, para proclamar o Evangelho da Graça e cooperar ativamente na edificação da Igreja e na expansão do Reino Eterno do SENHOR.",
    },
    responsible: "Pastor Denis Alves",
    contact: "mailto:prdenisalves1988@gmail.com",
  },

  // took form the app:
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
      full: null,
    },
    description: {
      full: (
        <article>
          <p className="mb-2">
            Nós do Ministério Infantil, somos responsáveis pelo ensino voltado
            às crianças. Além disso, temos a função de ensinar a palavra de Deus
            para os pequeninos. Durante nossa escola Bíblica e culto infantil,
            interagimos através da oração, histórias bíblicas, louvor,
            testemunhos, atividades e brincadeiras. Tudo isso para o crescimento
            e desenvolvimento da criança no Reino de Deus. Pois os pequenos de
            hoje, serão o futuro da igreja, por isso trabalhamos com muito amor
            e dedicação.
          </p>
          <p className="mb-2">
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
];
