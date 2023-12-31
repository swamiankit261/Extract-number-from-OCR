import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';
import { BiSolidColorFill } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function LocalStorage() {

    const navigate = useNavigate();
    const [getLocal, setGetLocal] = useState();
    const [color, setColor] = useState();


    const setdata = (e) => {
        let get = JSON.parse(localStorage.getItem('myImage')) || [];
        var blob = new Blob([e.target.files[0]], { type: 'text/plain' });
        let get1 = get.concat(URL.createObjectURL(blob));
        localStorage.setItem('myImage', JSON.stringify(get1));
        toast.success('Successfully Addaded!');
    }


    const getdata = () => {
        let data = JSON.parse(localStorage.getItem('myImage'));
        setGetLocal(data);
    }

    const handleDelete = (i) => {
        const alldata = JSON.parse(localStorage.getItem('myImage'));
        alldata.splice(i, 1);
        localStorage.setItem('myImage', JSON.stringify(alldata));
        setGetLocal(alldata);
        toast.success('Image is Deleted!', {
            position: "top-right",
            style: {
                border: '1px solid #0AF8EC ',
                padding: '16px',
                color: '#713200',
            },
            iconTheme: {
                primary: '#EA0808',
                secondary: '#FFFAEE',
            },
        });
    }

    const handliImage = (e) => {
        navigate('/imagePage', { state: e });

    }

    const colorGenerater = () => {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);

        var colorCode = '#' + red.toString(16).padStart(2, '0') +
            green.toString(16).padStart(2, '0') +
            blue.toString(16).padStart(2, "0");

        return colorCode;
    }

    let timer = useRef()
    const handleColor = () => {
        if (timer.current) {
            clearInterval(timer.current);
            timer.current = null;
        } else {
            timer.current = setInterval(() => {
                setColor(colorGenerater())
            }, 1000);
        };
    };


    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('myImage'));
        setGetLocal(data);
    }, []);
    return (
        <>
            <div className='container w-100 text-center'>
                <div className='w-25 text-center shadow mt-3 p-2 rounded mx-auto ' style={{ background: `${color}` }}>
                    <div className='d-flex'>
                        <input className='' type="file" onChange={setdata} />
                        <button className='btn text-light btn-sm' onClick={handleColor}><BiSolidColorFill /></button>
                    </div>
                    <div>
                        <button className='btn mt-3' onClick={getdata}>Submit</button>
                    </div>
                </div>
                <div>
                    {/* <button className='btn mt-4' onClick={getdata}>Get</button> */}
                </div>
                <div className='d-flex justify-content-around mt-4'>
                    {getLocal?.map((e, i) => {
                        return (
                            <div className='w-100 rounded' key={i}>

                                <img className='w-50 h-75 rounded border border-info' onClick={() => handliImage(e)} src={e} alt="" />
                                <div className='mt-1'>
                                    <button className='btn btn-outline-danger btn-sm' onClick={() => handleDelete(i)}><AiFillDelete /></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default LocalStorage