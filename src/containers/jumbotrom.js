import React from "react";
import { Jumbotron } from "../components";
import useContent from "../hooks/use-content";

export function JumbotronContainer() {
  const jumbo = useContent('jumbo');
    const jumboData = jumbo.jumbo.length > 0 ? jumbo.jumbo : []
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction} >
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt}></Jumbotron.Image>
          </Jumbotron.Pane>
        </Jumbotron>
      ))
      }
    </Jumbotron.Container>
  );
}