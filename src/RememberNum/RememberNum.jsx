import './RememberNum.css';

const RememberNum = () => {
    return (
        <div className="container">
            <h1>숫자 기억 게임</h1>
            <div id="number_display" className="question">4105</div>
            <div className='answer'>
                <input placeholder="숫자를 입력하세요" />
                <button>시작</button>
                <button>제출</button>
            </div>
        </div>
    );
};

export default RememberNum;
