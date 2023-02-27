import React, { memo } from "react";

import SEO from "atoms/SEO";
import { MenuProvider } from "contexts/Menu";
import { Navbar } from "molecules";
import { Container } from "atoms/index";

import ListenOnSpotify from "images/listen-spotify.svg";
import ListenOnDeezer from "images/listen-deezer.svg";
import ListenOnYoutube from "images/listen-youtube.svg";

const IndexPage = () => {
  return (
    <>
      <SEO title="Louvores da Igreja do Nazareno Central de Barueri" />
      <div className="flex flex-col min-h-screen">
        <MenuProvider>
          <Navbar />
        </MenuProvider>
        <section className="bg-fixed bg-[100%_100px] bg-gray bg-no-repeat bg-cover bg-[url('../images/logo-background.png')] flex items-end flex-1 lg:items-center">
          <Container>
            <div className="flex flex-col gap-10 pb-10">
              <div className="flex flex-col gap-2">
                <h1 className="font-extrabold text-3xl">
                  Louvores Nazareno Barueri
                </h1>
                <p>Ouça os louvores na sua plataforma de streaming favorita:</p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://open.spotify.com/playlist/5cmos6h7KQsTn1oDvHxaGH"
                  target="_blank"
                  alt="Ouça no Spotify"
                  className="bg-black rounded-lg flex-1 p-4 flex justify-center items-center hover:scale-105 transform transition-all duration-300 ease-in-out"
                  rel="noopener noreferrer"
                >
                  <ListenOnSpotify />
                </a>
                <a
                  href="https://www.deezer.com/us/playlist/10832188142?app_id=105611"
                  target="_blank"
                  alt="Ouça no Deezer"
                  className="bg-black rounded-lg flex-1 p-4 flex justify-center items-center hover:scale-105 transform transition-all duration-300 ease-in-out"
                  rel="noopener noreferrer"
                >
                  <ListenOnDeezer />
                </a>
                <a
                  href="https://music.youtube.com/playlist?list=PLaurt4dinFkG4Y8uNJksmWUb_m9I4jnnP"
                  target="_blank"
                  alt="Ouça no Youtube"
                  className="bg-black rounded-lg flex-1 p-4 flex justify-center items-center hover:scale-105 transform transition-all duration-300 ease-in-out"
                  rel="noopener noreferrer"
                >
                  <ListenOnYoutube />
                </a>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default memo(IndexPage);
