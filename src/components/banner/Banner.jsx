import styled from 'styled-components';
import illustration from '../../assets/svg/illustration.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

const LogoImage = styled.img`
  width: 144px;
  height: 144px;
  @media (min-width: 768px) {
    width: 392px;
    height: 392px;
  }
`;
const SpanBanner = styled.span`
  color: #002eff;
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '24px'};
  line-height: 24px;
  @media (min-width: 768px) {
    font-size: 56px;
  }
`;
const TitlePrimary = styled.h1`
  color: #002eff;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;

const Banner = () => {
  return (
    <Container>
      <div>
        <TitlePrimary>
          <SpanBanner fontWeight='400'>Formulario</SpanBanner>
          <SpanBanner
            fontWeight='600'
            fontSize='30px'
          >
            {' '}
            de prueba
          </SpanBanner>
        </TitlePrimary>
      </div>
      <div>
        <LogoImage
          src={illustration}
          alt=''
        />
      </div>
    </Container>
  );
};

export default Banner;
