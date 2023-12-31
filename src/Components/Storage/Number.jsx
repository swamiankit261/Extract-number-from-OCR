import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BiRefresh } from 'react-icons/bi';
import { FaCopy } from 'react-icons/fa';
import Tesseract from 'tesseract.js';

function Number() {
    const [para, setPara] = useState('');
    const [numb, setNumb] = useState([]);
    const [name, setName] = useState([]);
    const [ExtractedText, setExtractedText] = useState([]);
    const [files, setFiles] = useState();

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            Tesseract.recognize(
                reader.result,
                'eng',
            ).then((res) => {
                setExtractedText(res.data.text);
                toast.success('Copyed successfully!', {
                    position: "top-center",
                    style: {
                        border: '1px doted #0AF8EC',
                        padding: '1px',
                        color: '#713200',
                        iconTheme: {
                            primary: '#EA0808',
                            secondary: '#FFFAEE',
                        }
                    }
                });
            }).catch(error => {
                console.log('Error', error)
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        };
    };


    // const processImage = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             Tesseract.recognize(
    //                 reader.result,
    //                 'eng'
    //             ).then(({ data: { text } }) => {
    //                 resolve(text);
    //             }).catch((error) => {
    //                 reject(error)
    //             });
    //         };
    //         if (file) {
    //             reader.readAsDataURL(file)
    //         } else {
    //             reject(new Error('Invalid file'));
    //         }
    //     });
    // };

    const handlePara = (e) => {
        setPara(e.target.value);
        toast.success('Text added!', {
            position: "botom-center",
            style: {
                border: '1px doted #0AF8EC',
                padding: '1px',
                color: '#713200',
                iconTheme: {
                    primary: '#EA0808',
                    secondary: '#FFFAEE',
                }
            }
        });
    };
    const hendleRestart = () => {
        setPara('');
        setNumb([]);
        setName([])
        setExtractedText('');
        setFiles('');
        toast.success('Restart!', {
            position: "top-left",
            style: {
                border: '1px doted #0AF8EC',
                padding: '4px',
                color: '#713200',
                iconTheme: {
                    primary: '#EA0808',
                    secondary: '#FFFAEE',
                }
            }
        });
    }
    // Regular expression to match mobile numbers in the format +91 XXXXX XXXXX,

    const regex4 = /\d{5}\s\d{5}|\s\d{3}\s\d{3}\s\d{4}\s|\+\d{12}|\s\d{4}\s\d{3}\s\d{3}\s|\s\+\d{7}\s\d{5}\s|\s\d{6}\s\d{4}|\s\d{10}\s/g;
    const regex = /\b[A-Z][a-z]*\b/g;

    const handleNum = () => {
        // Extract mobile numbers using the regular expression
        const mobileNumbers4 = para.match(regex4) || [];
        setNumb(mobileNumbers4);
        if (mobileNumbers4.length > 0) {
            toast.success('Extract mobile numbers!', {
                position: "top-right",
                style: {
                    border: '1px dotted #0AF8EC',
                    padding: '1px',
                    color: '#713200',
                    iconTheme: {
                        primary: '#EA0808',
                        secondary: '#FFFAEE',
                    }
                }
            });
        };
        if (ExtractedText.length > 0) {
            // setPara(JSON.stringify(ExtractedText));
            setPara(ExtractedText);
            setExtractedText('');
            toast.success('Extract text!', {
                position: "top-left",
                style: {
                    border: '1px doted #0AF8EC',
                    padding: '1px',
                    color: '#713200',
                    iconTheme: {
                        primary: '#EA0808',
                        secondary: '#FFFAEE',
                    }
                }
            });
        };
        const name = para.match(regex) || [];

        setName(name);

    };

    const handleCopy = () => {
        const formattedNumbers = numb.map((number) => {
            // Remove spaces from the number
            const cleanedNumber = number.replace(/\s+/g, '');

            // Check the length of the cleaned number
            if (cleanedNumber.length === 10) {
                // If the number has 10 digits, format it as per the specified format
                return `${cleanedNumber.slice(0, 5)} ${cleanedNumber.slice(5)}`;
            } else if (cleanedNumber.length === 12 && cleanedNumber.startsWith('91')) {
                // If the number has 12 digits and starts with '91', format it accordingly
                return `${cleanedNumber.slice(2, 7)} ${cleanedNumber.slice(7)}`;
            } else {
                return number;
            }
        }).join('\n');

        navigator.clipboard.writeText(formattedNumbers);


        if (formattedNumbers) {
            toast.success('Copyed successfully!', {
                position: "top-center",
                style: {
                    border: '1px doted #0AF8EC',
                    padding: '1px',
                    color: '#713200',
                    iconTheme: {
                        primary: '#EA0808',
                        secondary: '#FFFAEE',
                    }
                }
            });
        };
    };

    const preventDefault = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <div className='d-flex m-2'>
                <div className='w-50 border'>
                    {/* <input type="file" accept='image/*' value={files} onChange={handleImageUpload} /> */}
                    <input type="file" accept="image/*" onChange={handleImageUpload} multiple />
                    <div className='d-flex justify-content-between'>
                        <h4 className='shadow w-25 mt-1 ml-1 text-center rounded p-1'> paragraph</h4>
                        <div className='btn btn-outline-info btn-sm h-25 mt-2 mr-2 shadow' onMouseDown={hendleRestart}><BiRefresh /></div>
                    </div>
                    <textarea name="" id="" cols="75" rows="20" defaultValue="Default Value" value={para} onChangeCapture={handlePara} />
                </div>
                <div className='w-50 border vh-100 d-flex overflow-auto'>
                    <div className='w-50'>
                        <div className='d-flex justify-content-between'>
                            <h4 className='shadow w-25 text-center mt-1 ml-1 rounded btn btn-success btn-sm' onClick={handleNum}>Numbers</h4>
                            <div className='btn btn-outline-info btn-sm h-25 mt-2 mr-2' onClick={handleCopy}><FaCopy /></div>
                        </div>
                        <ol>
                            {numb.map((e, i) => {
                                return <>
                                    <div className='border d-flex justify-content-between' key={i}>
                                        <li className=' pl-4 mr-2 pr-2 text-dark font-weight-bold font-italic' key={e.id}>
                                            {e}
                                        </li>
                                        <div className='btn btn-outline-dark btn-sm h-25 mt-1 mr-2 mb-1' key={i} onClick={() => navigator.clipboard.writeText(e)}>
                                            <FaCopy />
                                        </div>
                                    </div>
                                </>
                            })
                            }
                        </ol>
                    </div>
                    <div className='w-50 border overflow-auto'>
                        <div>
                            <h4 className='mb-3 btn btn'>Name</h4>
                        </div>
                        <ol>
                            {name.map((e, i) => {
                                return <>
                                    <div className='border d-flex justify-content-between' key={i}>
                                        <li className=' pl-4 mr-2 pr-2 text-dark font-weight-bold font-italic' key={e.id}>
                                            {e}
                                        </li>
                                        <div className='btn btn-outline-dark btn-sm h-25 mt-1 mr-2 mb-1' key={i} onClick={() => navigator.clipboard.writeText(e)}>
                                            <FaCopy />
                                        </div>
                                    </div>
                                </>
                            })
                            }
                        </ol>
                    </div>
                </div>
            </div >
            <div
                onDrop={handleImageUpload}
                onDragOver={preventDefault}
                style={{
                    width: '100%',
                    height: '200px',
                    border: '2px dashed #ccc',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '18px'
                }}
            >
                Drag & Drop Images Here
                {ExtractedText.length > 0 && (
                    <div>
                        <h2>Extracted Texts:</h2>
                        <ul>
                            {/* {ExtractedText.map((text, index) => (
                                <li key={index}>{text}</li>
                            ))} */}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default Number