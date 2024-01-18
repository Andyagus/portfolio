// import {useParams} from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import BookshelfImage from "../assets/images/testimage.png";
import ReachImage from "../assets/images/Reach.png";

import {useParams} from "react-router-dom";

import FirstWomanProject from "./Project/FirstWomanProject.tsx";

export default function Project(){
    
    let {id} = useParams();
    
    let currentProjectTitle: string;
    
    console.log('project')
    
    switch(id){
        case "NASA: First Woman":
            currentProjectTitle = 'NASA: First Woman'
            console.log("it is: " + currentProjectTitle)
            break;
         default:
            console.log('default')
    }
    
    return(
        <div className="mt-24  mx-auto p-6">
            <h1> {id} </h1>
            
            <div className="flex items-center p-4 lg:pl-16">
                <FaLongArrowAltLeft className="text-gray-500 text-lg" />
                <span className="text-sm font-semibold ml-2 text-gray-700">Back to All Projects</span>
            </div>

            <div className="max-w-xl ml-5 md:max-w-4xl lg:mx-auto">
                <div className="w-full">
                    <img src={BookshelfImage} alt="Header" className="w-full max-h-[450px] shadow-lg object-cover overflow-hidden rounded-xl" />
                </div>
                <div className="w-full">
                    <img src={ReachImage} alt="Header" className="w-full max-h-[450px] shadow-lg object-cover overflow-hidden rounded-xl" />
                </div>
                <h1 className="text-3xl lg:text-5xl font-bold mt-4">Bookshelf</h1>
                <p className="mt-1 text-gray-500">Enhacing the book finding experience by providing access to additional information while searching for your book.</p>
                <div className="flex justify-left space-x-4 mt-4">
                    <FaGithub className="cursor-pointer text-gray-300 hover:text-gray-500 duration-200 text-2xl" />
                    <FaLinkedin className="cursor-pointer text-gray-300 hover:text-gray-500 duration-200 text-2xl" />
                </div>
            </div>
        </div>
    )
}   