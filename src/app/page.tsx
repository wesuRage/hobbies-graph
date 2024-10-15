// @ts-nocheck

"use client";
import { Chart } from "react-google-charts";

const data = [
  ["Element", "Hobbies", { role: "style" }],
  ["Eventos", 1, "#82C8C6"],
  ["Ler", 2, "#BBD5D4"],
  ["Música", 2, "#98D6D3"],
  ["Videogame", 4, "#C9E9E8"],
  ["Estudar", 4, "#C0DEC6"],
  ["Filmes", 10, "#8CBDA7"],
  ["Esportes", 11, "#AACAB2"],
];

export default function Home() {
  return (  
    <main className="m-10 text-slate-600 bg-slate-300 p-10 rounded-2xl">
      <h1 className="text-2xl font-bold underline" id="iniciativa">INICIATIVA</h1>

      <br />

      <p>
      No Colégio Mahatma Gandhi, realizamos uma pesquisa para 
      identificar os hobbies e interesses dos alunos, buscando 
      entender melhor suas preferências e estimular atividades 
      que promovam o engajamento. Os dados coletados revelam uma 
      diversidade de interesses entre os estudantes, refletindo 
      uma rica variedade de opções que eles valorizam em seu tempo 
      livre.
      </p>

      <hr className="border-2 border-slate-600 my-6" />

      <Chart chartType="ColumnChart" width="100%" height="100%" data={data}/>

      <hr className="border-2 border-slate-600 my-6" />

      <h1 className="text-2xl underline font-bold" id="resultados">RESULTADOS</h1>

      <br />

      <p>
        Observamos que os esportes emergem como um dos principais 
        interesses, seguidos de perto por filmes. Outras atividades, 
        como videogame e estudo, também demonstram apelo significativo 
        entre os alunos. Música e leitura têm uma presença mais 
        moderada, enquanto eventos diversos atraem um número menor de 
        interessados.
      </p>
      <br />
      <p>
        Esses dados oferecem uma visão valiosa sobre as 
        preferências dos alunos e servirão como base para 
        planejar iniciativas futuras que promovam uma comunidade 
        escolar vibrante e integrada.
      </p>

      <br />

      <h1 className="text-2xl underline font-bold" id="conclusao">CONCLUSÃO</h1>
      
      <br />

      <p>
        Em conclusão, os dados coletados no Colégio Mahatma 
        Gandhi revelam um panorama claro dos interesses dos 
        alunos, destacando a importância de atividades que 
        promovam o bem-estar e a convivência social. A 
        predominância dos esportes e dos filmes indica áreas 
        onde a escola pode concentrar esforços para desenvolver 
        eventos e programas que engajem ainda mais os estudantes. 
      </p>
      <p>
        Além disso, a diversidade de hobbies, como videogame, 
        música e leitura, sugere que há espaço para a criação de 
        grupos e atividades que atendam a esses interesses variados. 
        Ao considerar essas preferências, a escola pode não apenas 
        enriquecer a experiência escolar, mas também fortalecer a 
        comunidade, incentivando a participação e a interação entre 
        os alunos. Dessa forma, os dados não apenas informam, mas 
        também guiam a construção de um ambiente escolar mais 
        inclusivo e dinâmico.
      </p>

    </main>
  );
}
