import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Ejemplos({ index }) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up" className="bg-white flex flex-col items-center justify-center py-12 border border-black p-4 rounded m-7">
      <h1 className="text-2xl font-bold mb-5">Ejemplo astro con animación {index}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus iste mollitia rerum, natus, dolores eum repudiandae atque debitis fugit saepe molestiae ex facilis libero. Blanditiis veniam repellendus porro officiis aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusantium unde recusandae voluptatem totam. Nobis ex dolor dignissimos magni ratione quidem repudiandae sit quae officia! Itaque maxime iusto quo consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit libero voluptas ex quod quas? Ab iste adipisci dolores veniam ipsa aperiam maiores consectetur doloremque omnis aspernatur incidunt architecto, dolorem sint.</p>
    </div>
)
}
