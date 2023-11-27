import { useState } from 'react';
import styles from './Chart.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const CHART_DATAs = [
    {
        name: 'BTC',
        value: 60.47,
        isLong: 0,
    },
    {
        name: 'BTC',
        value: 177.67,
        isLong: 1,
    },
    {
        name: 'BTC',
        value: -30,
        isLong: 1,
    },
    {
        name: 'ERP',
        value: -148.77,
        isLong: 0,
    },
    {
        name: 'ERP',
        value: -30.77,
        isLong: 0,
    },
    
];







function Chart() {
    const [dataList, setDataList] = useState([])
    const [max_column_value, setColumnLenght] = useState(300)
    function addMoreColumn() {
        let coinName = document.getElementById("coinName").value
        let coinValue = document.getElementById("coinValue").value
        let isLong = document.getElementById("long").checked
        setDataList(prev => {
            return (
                [
                    ...prev,
                    {
                        name:coinName,
                        value:coinValue,
                        isLong:isLong
                    }
                    
                ]
            )
        })
    }
    let getColumnArray = () => {
        let index = 0;
        let returnArray = [];
        while (index * 50 <= max_column_value) {
            returnArray[index] = index * 50;
            index++
        }
        return returnArray;
    };
    let column_array = getColumnArray()
    function deleteLastColumn() {
        setDataList(prev => prev.slice(0, -1))
    }
    return (
        <>
            <div className={cx('input-wrapper')}>
                <input id='coinName' placeholder='tên coin'/>
                <br></br>
                <input id='coinValue' placeholder='giá trị: (%)'/>
                <br></br>
                <p>long</p> <input id="long"  name='long' value={1} type='radio' />
                <p>short</p> <input  name="long" value={0} type='radio'/>
                <br></br>
                <button onClick={() => addMoreColumn()}>Thêm</button>
                <button onClick={() => deleteLastColumn()}>Xóa</button>
                <br/>
                <p>_______________________</p>
                <br/>
                <p>Điều chỉnh độ cao cột</p>
                <button onClick={() => setColumnLenght(prev => prev - 50)}>{'<'}</button>
                <button onClick={() => setColumnLenght(prev => prev + 50)}>{'>'}</button>
            </div>
            <div className={cx('wrapper')}>
                <h2>tổng kết lợi nhuận</h2>
                <div className={cx('content')}>
                    <div className={cx('percent-column')}>
                        {column_array.map((data, index) => {
                            return <p>{`${data}%`}</p>;
                        })}
                    </div>
                    {dataList.map((data, index) => {
                        let height_value = '0';
                        let height = 0
                        let isPositive = 0;
                        if (data.value >= 0) {
                            height_value = `${(data.value / max_column_value) * 100}%`;
                            height = (data.value / max_column_value) * 100
                        } else {
                            height_value = `${(-data.value / max_column_value) * 100}%`;
                            height = (-data.value / max_column_value) * 100
                            isPositive = 1;
                        }
                        let isRed = !data.isLong;
                        return (
                            <div key={index} style={{ height: height_value }} className={cx('column', { isPositive })}>
                                <p>{isPositive ? `${data.value}%` : `+${data.value}%`}</p>
                                <div className={cx('circle')}>
                                    <div></div>
                                </div>
                                {height > 10 && <div className={cx('triangle')}>
                                    <div></div>
                                </div>}
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
        </>
    );
}

export default Chart;
