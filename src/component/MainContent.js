const CONTENT = [
    {
        id: 1, title: "서울백병원", dec: "T. 02-2270-0114 서울특별시 중구\n 마른내로 9", link: "https://www.paik.ac.kr/seoul/user/main/view.do"
    },
    {
        id: 2, title: "부산백병원", dec: "T. 051-890-6114 부산광역시 부산진구\n 복지로 75", link: "https://www.paik.ac.kr/busan/user/main/view.do"
    },
    { id: 3, title: "상계백병원", dec: "T. 02-950-1114 서울특별시 노원구\n 동일로 1342", link: "https://www.paik.ac.kr/sanggye/user/main/view.do" },
    { id: 4, title: "일산백병원", dec: "T. 031-910-7114\n 경기도 고양시 일산서구\n 주화로 170", link: "https://www.paik.ac.kr/ilsan/user/main/view.do" },
    { id: 5, title: "해운대백병원", dec: "T. 051-797-0114 부산광역시 해운대구\n 해운대로 875", link: "https://www.paik.ac.kr/haeundae/user/main/view.do" },
]

const MainContent = () => {
    return (
        <section className="MainContent csc">
            <h2>백중앙의료원 산하병원</h2>
            <p>인제대학교 백병원은 지난 80여년 간의 진료성과를 바탕으로 국내 의료계를 선도하며<br />세계적 수준의 종합의료기관으로 성장하고 있습니다.</p>
            <div className="inner">
                {
                    CONTENT.map(content => {
                        return (
                            <figure key={content.id}>
                                <div className="box">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/section1_" + content.id + ".jpg"} alt="" />
                                </div>
                                <div className="tit">{content.title}</div>
                                <div className="dec">{content.dec}</div>
                                <a href={content.link} className="cbtn">자세히 보기</a>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default MainContent;