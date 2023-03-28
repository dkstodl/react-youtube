import React, { useEffect, useState } from 'react';
import {BsYoutube ,BsSearch} from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';


export default function SearchHeader() {
    const {keyword} = useParams();
    const navigate = useNavigate();
    const [text,setText] =useState('');
    const handleSubmit = (e) =>{
         e.preventDefault();
        if(text.trim().length ===0){
            return alert('단어를 입력해주세요');
        }else{
            navigate(`/videos/${text}`);
        }    
    }
    useEffect(()=> setText(keyword || ''),[keyword]); //url 키워드에 맞게 input 값이 변경업데이트 되도록 수정
    return (
        <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
            <Link to='/' className='flex items-center'>
                <BsYoutube className='text-4xl text-brand'/>
                <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
            </Link>
            <form className='w-full flex justify-center' onSubmit={handleSubmit}>
                <input
                    className='w-7/12 p-2 outline-none bg-black text-gray-50'
                    type='text' 
                    onChange={(e) => setText(e.target.value)}
                    value ={text}
                    placeholder='Search...' 
                >
                </input>
                <button className='bg-zinc-600 px-4'><BsSearch /></button>
           </form>
        </header>
    );
}

