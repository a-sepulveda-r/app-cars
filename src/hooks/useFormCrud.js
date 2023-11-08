import { useState } from 'react';

const useFormCrud = () => {
  const [formDataList, setFormDataList] = useState(() => {
    return JSON.parse(localStorage.getItem('formDataList')) || [];
  });

  const [editModeIndex, setEditModeIndex] = useState(null);

  const [formData, setFormData] = useState({
    rut: '',
    fullName: '',
    patent: '',
    brand: '',
    model: '',
    price: '',
    color: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => value !== '')) {
      if (editModeIndex !== null) {
        setFormDataList((prevDataList) => {
          const updatedDataList = prevDataList.map((data, index) => {
            if (index === editModeIndex) {
              return formData;
            }
            return data;
          });
          localStorage.setItem('formDataList', JSON.stringify(updatedDataList));
          return updatedDataList;
        });
        setEditModeIndex(null);
      } else {
        setFormDataList((prevDataList) => {
          const newFormDataList = [...prevDataList, formData];
          localStorage.setItem('formDataList', JSON.stringify(newFormDataList));
          return newFormDataList.filter((data) =>
            Object.values(data).some((value) => value !== '')
          );
        });
      }
      setFormData({
        rut: '',
        fullName: '',
        patent: '',
        brand: '',
        model: '',
        price: '',
        color: '',
      });
    }
  };

  const clearFormData = () => {
    localStorage.removeItem('formDataList');
    setFormDataList([]);
  };

  const removeFormData = (index) => {
    setFormDataList((prevDataList) => {
      const updatedFormDataList = prevDataList.filter((_, i) => i !== index);
      localStorage.setItem('formDataList', JSON.stringify(updatedFormDataList));
      return updatedFormDataList;
    });
  };

  const editFormData = (index, data) => {
    setEditModeIndex(index);
    setFormData(data);
  };

  return {
    formDataList,
    editModeIndex,
    formData,
    handleInputChange,
    handleSubmit,
    clearFormData,
    removeFormData,
    editFormData,
  };
};

export default useFormCrud;
