import IllustratedContent from "./IllustratedContent.js";
import { storiesOf } from "@storybook/react";
import Icon from "theme/ui/atoms/Icon";
import { H3 } from "theme/ui/atoms/Typography/Heading";
import Paragraph from "theme/ui/atoms/Typography/Paragraph";

storiesOf("molecules.IllustratedContent", module)
  .add("default", () => {
    return (
      <IllustratedContent media={<Icon icon="truck" />}>
        <H3>Shipping within 48h</H3>
      </IllustratedContent>
    );
  })
  .add("with a lot of content", () => {
    return (
      <IllustratedContent media={<Icon icon="truck" />}>
        <H3>Shipping within 48h</H3>
        <Paragraph>
          We are using many delivery services to let you choose what is best for
          you!
        </Paragraph>
      </IllustratedContent>
    );
  });
