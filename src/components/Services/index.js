import Icon1 from "./../../images/savings.svg";
import Icon2 from "./../../images/office.svg";
import Icon3 from "./../../images/benefits.svg";

import {
  ServicesContainer,
  ServicesTitle,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServiceCardTitle,
  ServiceCardDescr,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesTitle>Our Services</ServicesTitle>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServiceCardTitle>Reduce expences</ServiceCardTitle>
            <ServiceCardDescr>
              We help reduce your fees and increase your overall revenue.
            </ServiceCardDescr>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServiceCardTitle>Virtual offices</ServiceCardTitle>
            <ServiceCardDescr>
              You can access our platform online anywhere in the world.
            </ServiceCardDescr>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServiceCardTitle>Premium benefits</ServiceCardTitle>
            <ServiceCardDescr>
              Unlock our special membership card that returns 5% cash back.
            </ServiceCardDescr>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
