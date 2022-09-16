import { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';

const Promotion = () => {
    const MOVIE = useRef();
    const [url, setUrl] = useState('wJ7ysLMzIrA');

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            // autohide: 1,
            // playsinline: 1,
            mute: 1,
            playlist: url,
        },

    };



    return (
        <section className="Promotion csc">
            <h2>홍보영상</h2>
            <p>인제대학교 백병원 홍보영상 및 병원생활 안내 영상입니다.</p>
            <div className="container">
                <div className='movie' ref={MOVIE} id='player' >
                    <YouTube videoId={url} opts={opts} className='u' />
                </div>


                <div className="des">
                    <div className='left' onClick={() => setUrl('wJ7ysLMzIrA')}>
                        <h3>백병원 홍보영상 <span></span></h3>
                        <p>건강한 오늘, 믿음의 내일, 인제대학교 <br /> 백병원이 함께하겠습니다.</p>
                    </div>
                    <button>
                        <i className='xi-arrow-top'></i>
                    </button>
                    <div className='right' onClick={() => setUrl('Ebfypjf3pxQ')}>
                        <h3>백병원 병원생활 <span></span></h3>
                        <p>백병원은 환자분의 빠른 쾌유를 위하여<br />  최선을 다할 것을 약속드립니다.</p>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Promotion;