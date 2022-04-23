import React from "react";
import nazateen from "images/ministries/adolescentes.png";
import casadosParaSempre from "images/ministries/casados-para-sempre.png";
import escolhiAmar from "images/ministries/escolhi-amar.png";
import mulheresYanni from "images/ministries/mulheres-yanni.png";
import musica from "images/ministries/musica.png";
import jni from "images/ministries/jni.png";
import dni from "images/ministries/dni.png";
import mni from "images/ministries/mni.png";
import nazakids from "images/ministries/nazakids.png";

export const ministries = [
  {
    image: jni,
    title: {
      short: "Jovens",
      full: "Juventude Nazarena Internacional",
    },
    description: {
      short:
        "Integrar, treinar e capacitar jovens para o envolvimento no reino de Deus",
      full: "Somos a JNI distrito Barueri, Este ministério trabalha para atrair, treinar e capacitar os jovens no serviço do Reino de Deus, facilitando sua integração á igreja como corpo de Cristo. Desejamos ver uma geração de jovens discípulos semelhantes a Cristo. A JNI carrega como objetivo promover o crescimento desses jovens discípulos na vida cristã.",
    },
    responsible: "Igor Pereira",
    contact: "https://wa.me/5511995127660",
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
    image: dni,
    title: {
      short: "DNI",
      full: "DNI - Discipulado Nazareno Internacional",
    },
    description: {
      short: "Discipulado Nazareno Internacional",
      full: "O DNI (Discipulado Nazareno Internacional) é composto por escola dominical, estudos biblicos, pequenos grupos, escola bíblica de férias, seminário teológico e até podcasts... Todas essas atividades de uma igreja local compõe a atividade do MEDDI. A Missão do MEDDI é cumprir a Grande Comissão entre crianças, jovens e adultos, em preparação para ser discípulos e fazer discípulos de Cristo nas nações. Com base nessa missão fica claro que o que se espera de cada crente é que se torne um discípulo de Cristo e faça outros discípulos. A ordem do Senhor foi: “Portanto, vão e façam discípulos de todas as nações [...], ensinando-os a obedecer a tudo o que eu lhes ordenei” (Mt 28:19-20).",
    },
    responsible: "Denis Alves",
    contact: "https://wa.me/5511947645030",
  },

  // took form the app:
  {
    image: mni,
    title: {
      short: "MNI",
      full: "MNI - Missões Nazarenas Internacionais",
    },
    description: {
      short: "Transformar pessoas comuns em autênticos discípulos de Cristo.",
      full: (
        <article>
          <p>
            É através das missões Nazarenas Internacionais (MNI) que podemos
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
    contact: "https://wa.me/5511980134569",
  },
  {
    image: nazakids,
    title: {
      short: "Nazakids",
      full: "Nazakids",
    },
    description: {
      short: "Cuidando do coração das criancas",
      full: (
        <article>
          <p className="mb-2">
            Ministério voltado para o ensino das crianças de nossa igreja.
            Compreendendo também a nossa EBD. Atuando com as idades de 0 a 10
            anos.
          </p>
          <p>
            <b>Possuímos 3 faixas etárias:</b>
          </p>
          <ul className="mb-2">
            <li>2 e 3 anos MATERNAL</li>
            <li>4 A 6 anos PRE PRIMÁRIOS</li>
            <li>7 a 10 anos PRIMÁRIO</li>
          </ul>
          <p>
            <b>GRUPO DE LOUVOR, DANÇA E TEATRO</b>
          </p>
          Nossa missão é Ministrar e ensinar o amor de Jesus às crianças desde
          sua mais tenra idade, visando formar uma base sólida no coração delas.
          Procuramos trabalhar os fundamentos da Bíblia seguindo a linguagem e
          compreensão de cada idade, para que as crianças entendam e se firmem
          na palavra de Deus.
          <p>
            <p>
              Nossa equipe é formada professoras dedicadas e que têm amor pela
              vida de cada uma das nossas crianças.
            </p>
            <p>Nazakids trabalhando para o crescimento das crianças</p>
          </p>
        </article>
      ),
    },
    responsible: "Alessandra Melo",
  },
];
