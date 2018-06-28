import React from "react";
import InlineCards from "theme/ui/organisms/InlineCards";
import IllustratedContent from "theme/ui/molecules/IllustratedContent";
import Icon from "theme/ui/atoms/Icon";
import { H3 } from "theme/ui/atoms/Typography/Heading";
import "./Reinsurance.scss";

const Reinsurance = () => {
  return (
    <InlineCards>
      <IllustratedContent media={<Icon icon="time" />}>
        <H3>Shipping within 48h</H3>
      </IllustratedContent>
      <IllustratedContent media={<Icon icon="like" />}>
        <H3>Money back guarantee</H3>
      </IllustratedContent>
      <IllustratedContent media={<Icon icon="lock" />}>
        <H3>Secured Payment</H3>
      </IllustratedContent>
    </InlineCards>
  );
};

export default Reinsurance;
