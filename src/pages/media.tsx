import { InstagramEmbed } from "react-social-media-embed";
// https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-instagramembed--main-example

const Featured = () => {
  return (
    <section>
      <InstagramEmbed
        url="https://www.instagram.com/p/Ctbhzg9LHYm/"
        width={400}
      />
    </section>
  );
};

export default Featured;
