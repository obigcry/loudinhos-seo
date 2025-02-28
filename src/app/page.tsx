'use client'

import { useState } from 'react'
import { ClipboardCheck } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import Image from 'next/image';

export default function App() {
  const [tag, setTag] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);
  const [copied, setCopied] = useState(false);

  const allTags = [
    { id: '0', name: 'VALORANT', tags: '#valorant #vlr #vctamericas #vct #valorantchampions #valorantchampionstour #loud #loudgg #riot #riotgames #esports' },
    { id: '1', name: 'LOL', tags: '#CBLOL #CBLOLACADEMY #LEAGUEOFLEGENDS #LOL #RIOT #RIOTGAMES #ESPORTS #loud #loudgg' },
    { id: '2', name: 'FREEFIRE', tags: '#ff #freefire #freefirebrasil #ffbrasil #garena #garenabrasil #garenafreefire #garenaoficial #esports #loud #loudgg' },
    { id: '3', name: 'GERAL', tags: '#valorant #vlr #vctamericas #vct #valorantchampions #valorantchampionstour #loud #loudgg #riot #riotgames #CBLOL #CBLOLACADEMY #LEAGUEOFLEGENDS #LOL #RIOT #RIOTGAMES #ff #freefire #freefirebrasil #ffbrasil #garena #garenabrasil #garenafreefire #garenaoficial #esports #loud #loudgg' },
    { id: '4', name: 'INFLUENCERS', tags: '#loud #loudgg #twitch #twitchstreamer #twitchtv #youtube #youtubestream #stream #livestream' },
  ];

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function generatorSeo() {
    setTag(allTags[categoriaSelecionada].tags);
    toast.success("Hastags geradas com sucesso!");
    setCopied(false); // Resetar o estado do botão
  }

  async function copyToClipboard() {
    if (tag) {
      await navigator.clipboard.writeText(tag);
      toast.success("Hastags copiadas com sucesso!");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Resetar depois de 2s
      console.log(copied)
    }
  }

  return (
    <main className='flex flex-col items-center min-h-screen p-6'>
      <Image
  alt="inoticiama"
  src="/logo.png" // Sem o prefixo "public/"
  width={248}
  height={100} // Ou defina uma altura fixa, se necessário
/>


      <div><Toaster/></div>
      <section className="flex flex-col m-20 text-xl items-center select-none  main-seo">
        <section className="title-seo">
          <h1>Gerador de SEO</h1>
        </section>
        <section className='flex flex-col md:flex-row gap-10 m-20 options-seo'>
          {allTags.map((tags, index) => (
            <div className='flex bg-white text-black p-4 border-rounded rounded-xl transition-all hover:scale-105 hover:bg-green-500 hover:text-white cursor-pointer' key={tags.id}>
              <h1
                className={`option-seo ${index === categoriaSelecionada ? 'selected' : ''}`}
                onClick={() => handleSwitchCategory(index)}
              >
                {tags.name}
              </h1>
            </div>
          ))}
        </section>

        <button className='cursor-pointer m-5  border-rounded  transition-all hover:border-b  hover:inline-block ' onClick={generatorSeo}>
          Gerar SEO
        </button>

        <section className='flex flex-col md:flex-col bg-gray-700 p-10 mt-20  tags-seo border-rounded rounded-xl'>
          {tag !== '' && (
            <>
              <p>{tag}</p>
              <button onClick={copyToClipboard} className='flex items-center justify-center i cursor-pointer p-2 bg-gray-600 border-rounded rounded-xl w-[50px]'>
                <ClipboardCheck className='items-center' />
              </button>
            </>
          )}
        </section>
      </section>
    </main>
  );
}
