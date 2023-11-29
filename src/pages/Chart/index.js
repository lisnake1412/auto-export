import { useState } from 'react';
import html2canvas from 'html2canvas';
import classNames from 'classnames/bind';
import styles from './Chart.module.scss';


const cx = classNames.bind(styles);

function Chart() {
    const [dataList, setDataList] = useState([]);
    const [max_column_value, setColumnLenght] = useState(300);
    function addMoreColumn() {
        let coinName = document.getElementById('coinName').value;
        let coinValue = document.getElementById('coinValue').value;
        let isLong = document.getElementById('long').checked;
        setDataList((prev) => {
            return [
                ...prev,
                {
                    name: coinName,
                    value: coinValue,
                    isLong: isLong,
                },
            ];
        });
    }
    let getColumnArray = () => {
        let index = 0;
        let returnArray = [];
        while (index * 50 <= max_column_value) {
            returnArray[index] = index * 50;
            index++;
        }
        return returnArray;
    };
    let column_array = getColumnArray();
    function deleteLastColumn() {
        setDataList((prev) => prev.slice(0, -1));
    }

    function capture() {
        html2canvas(document.querySelector("#capture")).then(canvas => {
            
            document.body.appendChild(canvas)
        });
        
    }

    const currentDate = new Date();
    return (
        <>
            <div className={cx('input-wrapper')}>
                <input id="coinName" placeholder="tên coin" />
                <br></br>
                <input id="coinValue" placeholder="giá trị: (%)" />
                <br></br>
                <p>long</p> <input id="long" name="long" value={1} type="radio" />
                <p>short</p> <input name="long" value={0} type="radio" />
                <br></br>
                <button onClick={() => addMoreColumn()}>Thêm</button>
                <button onClick={() => deleteLastColumn()}>Xóa</button>
                <button onClick={() => capture()}>Chụp ảnh</button>
                <br />
                <p>_______________________</p>
                <br />
                <p>Điều chỉnh độ cao cột</p>
                <button onClick={() => setColumnLenght((prev) => prev - 50)}>{'<'}</button>
                <button onClick={() => setColumnLenght((prev) => prev + 50)}>{'>'}</button>
            </div>
            <h3 style={{margin:10, color:"red"}}>demo:</h3>
            <div className={cx('wrapper')} id='capture'> 
                <h2>tổng kết lợi nhuận</h2>
                <h3>{`ngày ${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()} `}</h3>
                <div className={cx('content')}>
                    <div className={cx('long-short')}>
                        <div className={cx('long')}></div>
                        <span>Long</span>
                        <div className={cx('short')}></div>
                        <span>Short</span>
                    </div>
                    <div className={cx('percent-column')}>
                        {column_array.map((data, index) => {
                            return <p>{`${data}%`}</p>;
                        })}
                    </div>
                    {dataList.map((data, index) => {
                        let height_value = '0';
                        let height = 0;
                        let isPositive = 0;
                        if (data.value >= 0) {
                            height_value = `${(data.value / max_column_value) * 100}%`;
                            height = (data.value / max_column_value) * 100;
                        } else {
                            height_value = `${(-data.value / max_column_value) * 100}%`;
                            height = (-data.value / max_column_value) * 100;
                            isPositive = 1;
                        }
                        let isRed = !data.isLong;
                        return (
                            <div key={index} style={{ height: height_value }} className={cx('column', { isPositive })}>
                                <p>{isPositive ? `${data.value}%` : `+${data.value}%`}</p>
                                <div className={cx('circle')}>
                                    <div></div>
                                </div>
                                {height > 10 && (
                                    <div className={cx('triangle')}>
                                        <div></div>
                                    </div>
                                )}
                                <div className={cx('left-part')}></div>
                                <div className={cx('right-part')}></div>
                                <div className={cx('bottom-content')}>
                                    <div className={cx({ isRed })}></div>
                                    <p>{data.name}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <h3 style={{margin:10, color:"red"}}>Ảnh sau khi xuất(chuột phải để lưu):</h3>
        </>
    );
}

export default Chart;
