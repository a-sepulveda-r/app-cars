import { brands, modelsByBrand } from '../data/brands';
import { ButtonForm } from '../components/Button/ButtonForm';
import { InputField } from '../components/Input/InputField';
import { InputForm } from '../components/Input/InputForm';
import { SelectField } from '../components/Input/SelectField';
import useFormCrud from '../hooks/useFormCrud';
import Banner from '../components/banner/Banner';
import styled from 'styled-components';

const ContainerSellerInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;
  @media (min-width: 768px) {
    grid-template-columns: 2.05fr 1fr;
  }
`;
const ContainerSellerInfo2 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;
const CrudComponent = () => {
  const { formData, handleInputChange, handleSubmit } = useFormCrud();

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Banner />
        <div style={{ width: '80vw', fontSize: '18px' }}>
          <h2>Nuevo Formulario</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the bed industry&apos;s standard
            dummy text ever since.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ width: '80vw' }}
        >
          <h3 style={{ fontSize: '20px' }}>Datos del vendedor:</h3>
          <ContainerSellerInfo>
            <InputForm
              labelText='Nombre Completo'
              htmlFor='fullName'
              style={{ flex: '3' }}
            >
              <InputField
                type='text'
                name='fullName'
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </InputForm>
            <InputForm
              labelText='Rut Vendedor'
              htmlFor='rut'
            >
              <InputField
                type='text'
                name='rut'
                value={formData.rut}
                onChange={handleInputChange}
                required
              />
            </InputForm>
          </ContainerSellerInfo>
          <h3>Datos del vehículo:</h3>
          <ContainerSellerInfo2>
            <InputForm
              labelText='Patente del vehículo'
              htmlFor='patent'
            >
              <InputField
                type='text'
                name='patent'
                value={formData.patent}
                onChange={handleInputChange}
                required
              />
            </InputForm>
            <InputForm
              labelText='Marca del vehículo'
              htmlFor='brand'
            >
              <SelectField
                name='brand'
                value={formData.brand}
                onChange={handleInputChange}
                required
              >
                <option
                  value=''
                  disabled
                  style={{ display: 'none' }}
                ></option>
                {brands.map((brand) => (
                  <option
                    key={brand}
                    value={brand}
                  >
                    {brand}
                  </option>
                ))}
              </SelectField>
            </InputForm>
            <InputForm
              labelText='Modelo del vehículo'
              htmlFor='model'
            >
              <SelectField
                name='model'
                value={formData.model}
                onChange={handleInputChange}
                required
              >
                <option
                  value=''
                  disabled
                  style={{ display: 'none' }}
                ></option>
                {formData.brand &&
                  modelsByBrand[formData.brand] &&
                  modelsByBrand[formData.brand].map((model) => (
                    <option
                      key={model}
                      value={model}
                    >
                      {model}
                    </option>
                  ))}
              </SelectField>
            </InputForm>
            <InputForm
              labelText='color del vehículo'
              htmlFor='color'
            >
              <InputField
                type='text'
                name='color'
                value={formData.color}
                onChange={handleInputChange}
                required
              />
            </InputForm>
            <InputForm
              labelText='Precio del vehículo'
              htmlFor='price'
            >
              <InputField
                type='number'
                name='price'
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </InputForm>
          </ContainerSellerInfo2>
          <div style={{ margin: '20px 0px' }}>
            <hr />
          </div>
          <ContainerButton>
            <ButtonForm type='submit'>Enviar</ButtonForm>
          </ContainerButton>
        </form>
      </div>
    </>
  );
};

export default CrudComponent;
