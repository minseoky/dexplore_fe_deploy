import {Fragment} from "react";
import Header from "@components/common/frame/Header";
import MuseumForm from "@components/common/frame/MuseumForm";

const MuseumCreate = () => {

  return (
    <>
      <Header name='새로운 박물관을 등록하세요' height='100px' isDate={false}></Header>
      <MuseumForm></MuseumForm>
    </>
  );
};

export default MuseumCreate;