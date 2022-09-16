import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, content: "인제대학교 백병원 의료진이\n정성을 다해 진료하겠습니다.", desc: "환자의 기대가 현실이 되는 믿음직한 병원이 되겠습니다.", link: "https://www.paik.ac.kr/paik/user/main/view.do#", title: "The world expands" },
    { id: 2, content: "환자중심의 의료서비스\n인제대학교 백병원입니다.", desc: "전통과 실력, 전문성을 갖춘 고객중심 진료시스템", link: "https://www.paik.ac.kr/paik/user/main/view.do#", title: "New path created" },
    { id: 3, content: "백병원 , ", desc: "인제대학교의 젊은 인재들과 함께합니다.", link: "https://www.paik.ac.kr/paik/user/main/view.do#", title: "World expands" }
]

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        //dots: true,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 5000,
        // fade: true,
    }
    return (
        <section className='MainVisual'>
            <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                                <div className="inner">
                                    <p className='tit'>{slide.content}</p>
                                    <div className='des'>{slide.desc}</div>
                                    <a href={slide.link} target="_blank" className='cbtn'>
                                        자세히 보기
                                    </a>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
            <div className="slideNum">
                0{IDX + 1} /<span>  0{SLIDE.length}</span>
            </div>
            <ul className="slideTab">
                {
                    SLIDE.map((dots, idx) => {
                        return (
                            <li key={dots.id} className={idx === IDX ? ' on' : ''} onClick={() => mainSlide.current.slickGoTo(idx)}>{ }</li>
                        )
                    })
                }
            </ul>
            <div className="slideArrows">
                <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-arrow-left'></i></button>
                <button onClick={() => mainSlide.current.slickNext()}><i className='xi-arrow-right'></i></button>
            </div>
        </section>
    )
}

export default MainVisual;