import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';
import background from '../../../assets/images/museum_BW1.jpg';

const FullScreenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('${background}');
  background-size: cover;
  background-position: center;
  display: block;
  text-align: center;
`;

const DexploreTitle = styled.h1`
  font-family: Pretendard-ExtraBold;
  font-size: 38px;
  color: #FFFFFF;
  text-align: center;
  padding:5vh;
`

const EmptyContainer = styled.div`
  height: 50vh;
  width: 100%;
`

const StyledSlide = styled(SwiperSlide)`
  background-color: transparent;
  height: 18vh;
  text-align: center;
  align-content: center;
  color: #FFFFFF;
  h3 {
    font-size: 18px;
    font-family: Pretendard-Bold;
    margin: 0px;
  }
  p {
    font-size: 15px;
    font-family: Pretendard-Light;
    margin:15px;
  }
`;

const StyledSwiper = styled(Swiper)`
  .swiper-pagination-bullet {
    background-color: #FFFFFF;  //bullet 색상 화이트로 커스텀
    opacity: 33%;
    scale: 80%;
  }
  .swiper-pagination-bullet-active {
    opacity: 100%;
  }
`;


// 버튼 스타일 정의 및 애니메이션 적용
const StyledStartBtn = styled.button`
  margin: 3vh;
  background-color: #000000;
  background-size: contain;
  border: solid 0.1px #FFFFFF;
  padding: 8px 15px;
  border-radius: 9999px;
  color: #FFFFFF;
  font-family: Pretendard-Regular;
  font-size: 20px;
`;

const WelcomePage = () => {

    const inner = [
        {title:"편리한 관리 시스템", description: "박물관과 작품 정보를 간편하게 관리하세요."},
        {title:"위치 기반 박물관 탐색", description: "가까운 박물관과 전시품 리스트를 쉽게 확인하고 선택하세요."},
        {title:"작품 QR코드 자동 생성 및 제공", description: "간편하게 작품 정보를 스캔하여 감상하세요."},
        {title:"오디오 큐레이팅", description: "작품에 대한 설명과 함께 작품에 몰입하세요."}
    ]

    return (
        <FullScreenWrapper>
            <DexploreTitle>
                Dexplore
            </DexploreTitle>
            <EmptyContainer/>
            <StyledSwiper
                modules={[Pagination]}
                spaceBetween={5}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {inner.map((item, index) => (
                    <StyledSlide key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </StyledSlide>
                ))}
            </StyledSwiper>
            <StyledStartBtn>Get started</StyledStartBtn>
        </FullScreenWrapper>
    );
};

export default WelcomePage;
