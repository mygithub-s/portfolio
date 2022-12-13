import React from 'react';
import './App.css';
import di from "./component/images/di.png"
import upwork from "./component/images/upwork.png"




function App() {
  return (
    <body className=" bg-neutral-400 h-max">
      <header className="flex justify-between text-white bg-black sticky top-0 h-8 ">
      <h1 className="text-3xl">DILAMO | ERISO</h1>
      <a href="https://www.upwork.com/freelancers/~0115443fe668f5dbf8" target="_blank"><img className="w-24"src={upwork} alt="upwork" /></a>
      
      </header>
      <div className="lg:flex">
      <div>
      <img className="mx-auto mt-6 rounded-3xl lg:mt-16 lg:ml-10 lg:mr-52"src={di} alt="di" />
      </div>
      <div className="text-center ">
      <h1 className="text-6xl font-serif mt-6">Hi, My Name is </h1>
      <h1 className="text-6xl font-serif">Dilamo Eriso</h1>
      <p className='font-serif'>I'm a front-end React developer from Ethiopia,</p> 
      <p className='font-serif bg-neutral-400'>super excited to work with you.</p>
      <br />
      <div className="">
        <button className="bg-transparent w-64 text-3xl border-2 border-current"><a href="https://github.com/mygithub-s" target="_blank">Github</a>
        </button><br /><br />
        <button className="w-64 text-3xl bg-transparent border-2 border-current"><a href="./App.js" target="_blank">Portfolio</a>
          </button><br /><br />
        <button className="w-64 text-3xl bg-transparent border-2 border-current"><a href="https://twitter.com/dilamoeriso"target="_blank">Twitter</a>
          </button><br /><br />
        <button className="w-64 text-3xl bg-transparent border-2 border-current mb-96"><a href="https://www.linkedin.com/in/dilamo-eriso-9b2bb3245/" target="_blank">Linkedin</a>
        </button><br /><br />
      </div>
      </div>
      
      </div>
      <footer className="bg-black text-white text-right bottom-0 sticky h-8">
        <h1>DILAMO | ERISO</h1>
      </footer>
    </body>
  );
}

export default App;
