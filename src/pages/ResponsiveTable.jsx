import styled from 'styled-components';
import useFormCrud from '../hooks/useFormCrud';
import SVGDelete from '../components/SVGDelete';

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const TableHeader = styled.th`
  padding: 30px;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
  text-align: center;
`;

const TableCell = styled.td`
  padding: 30px;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;

const Container = styled.div`
  display: grid;
  justify-content: center;
  text-align: left;
  margin: 0 auto;
`;

const Content = styled.div`
  text-align: left;
  padding: 20px;
`;

const ResponsiveTable = () => {
  const { formDataList, removeFormData } = useFormCrud();
  return (
    <Container>
      <Content>
        <h2 style={{ fontSize: '30px' }}>Lista Formulario</h2>
        <p style={{ fontSize: '18px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the bed industry&apos;s standard dummy
          text ever since.
        </p>
      </Content>
      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Nombre</TableHeader>
              <TableHeader>
                Rut
                <br />
                vendedor
              </TableHeader>
              <TableHeader>
                Patente <br />
                vehículo
              </TableHeader>
              <TableHeader>
                Marca
                <br />
                vehículo
              </TableHeader>
              <TableHeader>
                Modelo
                <br />
                vehículo
              </TableHeader>
              <TableHeader>
                Color
                <br />
                vehículo
              </TableHeader>
              <TableHeader>Eliminar</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {formDataList.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.fullName}</TableCell>
                <TableCell>{data.rut}</TableCell>
                <TableCell>{data.patent}</TableCell>
                <TableCell>{data.brand}</TableCell>
                <TableCell>{data.model}</TableCell>
                <TableCell>{data.color}</TableCell>
                <TableCell>
                  <button onClick={() => removeFormData(index)}>
                    {' '}
                    <SVGDelete />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ResponsiveTable;
