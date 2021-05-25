import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

const AboutPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/slimsloth")
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  if (loading) return <h1>Loading data...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;
  return (
    <Container>
      <h1>Author </h1>
      <img alt={data.login} src={data.avatar_url}></img>
      <p>Created by Sean Mitchell</p>
      <h1>Syntax Guide</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue
        nunc, vestibulum vitae sapien ultrices, pulvinar tincidunt velit.
        Vestibulum ligula libero, finibus et vulputate non, sagittis id nulla.
        Etiam luctus tincidunt lorem, non egestas est semper tempor. Praesent
        eget enim ultrices, accumsan nibh nec, euismod ipsum. Nullam sagittis
        ultricies velit, eget maximus turpis laoreet sodales. Nam ac justo nisi.
        Proin dignissim quam non mi varius consequat. Sed eu turpis quis magna
        vehicula facilisis ut vitae justo. Sed iaculis lorem urna, id tincidunt
        mauris pretium eget. Ut luctus nisl non rhoncus hendrerit. Nunc commodo
        at nulla a imperdiet. Duis eu ultrices velit. Ut dignissim rutrum neque.
        Aenean bibendum, ante quis interdum dictum, justo metus lacinia arcu, ut
        commodo lacus nibh vitae felis. Quisque faucibus consectetur magna, vel
        efficitur massa pretium sit amet. Etiam lacinia sagittis magna, nec
        imperdiet ex. Donec at nulla non dolor gravida ultricies. Ut ipsum
        turpis, vehicula nec efficitur dignissim, interdum sit amet ante. Donec
        ultrices dui eu purus aliquam laoreet. Nunc sit amet porta tellus.
        Suspendisse potenti. Integer semper vulputate felis eu molestie. Quisque
        ornare mi quis faucibus mattis. Suspendisse sollicitudin tincidunt ex at
        porttitor. Integer mollis est sed orci accumsan, quis luctus eros
        ultricies. Praesent consequat consequat justo eu porta. Mauris
        sollicitudin felis elementum justo facilisis faucibus. Curabitur
        pulvinar efficitur porttitor. Vestibulum porta rutrum rutrum. In nulla
        enim, imperdiet quis molestie ac, faucibus a lectus. Aenean ipsum arcu,
        ullamcorper eget enim a, venenatis dictum risus. Suspendisse nunc sem,
        rutrum vitae congue ac, fringilla vitae elit. Donec ultrices, arcu at
        imperdiet faucibus, elit lorem fermentum magna, id consequat neque nisl
        et nisl. Suspendisse potenti. Cras eu risus quam. Mauris quis fermentum
        erat. Curabitur egestas nunc risus, a pulvinar enim pellentesque sit
        amet. Vivamus sit amet ipsum nibh. Proin eros lacus, malesuada quis
        ligula sed, placerat consectetur felis. Aliquam bibendum leo ut sagittis
        dapibus. Maecenas nec aliquam tortor, et porta dolor. Cras cursus
        molestie pharetra. Quisque sed mattis nisi. Donec convallis posuere
        eros, et luctus velit laoreet non. Nulla aliquet scelerisque lorem a
        dignissim. Ut malesuada vel ante eu finibus. Nulla volutpat massa eu
        congue volutpat. In hac habitasse platea dictumst. Maecenas porttitor
        ipsum quis nulla dapibus, molestie sollicitudin est aliquet. Quisque
        auctor sem consequat lacus vestibulum, ac vestibulum metus imperdiet. In
        auctor suscipit leo eu fermentum. Nulla ultrices augue et odio mattis
        iaculis sed at purus. Etiam et ex sed mauris ornare hendrerit et rhoncus
        dolor. Curabitur lobortis at nisl quis sodales. Nam blandit sagittis
        dolor nec consectetur. Sed consequat finibus lorem ac volutpat.
        Pellentesque ut massa non urna finibus feugiat. Morbi interdum est
        lacus, at tempor ante porta vel. Donec turpis lorem, sagittis ut semper
        id, placerat quis quam. Ut sagittis, orci eu aliquet volutpat, purus
        orci vestibulum neque, ac convallis arcu quam vestibulum magna.
        Suspendisse potenti. Vivamus odio lacus, consequat in lacinia quis,
        egestas suscipit tellus. Mauris auctor justo non mollis accumsan. Duis
        rutrum, dui nec iaculis sodales, orci lectus egestas enim, et
        ullamcorper tortor eros sit amet metus. Mauris at urna luctus, suscipit
        mi in, viverra purus.
      </p>
    </Container>
  );
};

export default AboutPage;
