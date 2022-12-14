import Head from 'next/head'
import data from '../data.json'

export default function Home() {
  return (
    <div className='h-screen w-screen flex flex-col font-["Jura"]'>
      <Head>
        <title>Resource GateWay - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='h-max flex gap-5 items-center px-20 py-8'>
        <div>
          <h1 className='text-3xl font-bold text-slate-900'>RESOURCE GATEWAY</h1>
        </div>
        <div className='h-[80px] flex-1 bg-slate-200 rounded-xl flex overflow-hidden items-center'>
          <input className='bg-slate-200 flex-1 px-8 outline-none h-full text-sm font-bold' type="text" name="search" id="search" placeholder='Job Title' />
          <div className='h-4 border border-slate-300'></div>
          <input className='bg-slate-200 flex-1 px-8 outline-none h-full text-sm font-bold' type="text" name="search" id="search" placeholder='Location' />
          <button className='text-white text-sm font-bold bg-slate-900 px-10 h-full'>SEARCH</button>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='h-12 w-12 rounded-full bg-slate-900'></div>
          <div><button className="text-sm font-bold flex items-center justify-center text-white rounded-full w-max px-8 py-4 bg-slate-900">LOGOUT</button></div>
        </div>
      </header>
      <main className='flex flex-1 px-20 overflow-hidden'>
        <div className='flex-1 bg-slate-200 rounded-t-xl overflow-x-hidden '>
          <nav className='h-[80px] bg-slate-300 grid grid-flow-col auto-cols-max gap-3 items-center px-3 overflow-x-scroll'>
            <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">All</button>
            <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">Front-End Engineer</button>
            <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">System Admin</button>
            <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">Back-End Engineer</button>
            <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">Marketing</button>
            <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">UI Designer</button>
            <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">UX Designer</button>
            <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">Product Manager</button>
            <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">DevOps Engineer</button>
          </nav>
          <div className='overflow-y-scroll overflow-x-hidden'>
            <div>
              <h1 className='text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900 mt-3 mb-3 mx-8'>Front-End Engineer</h1>
              <ul className='grid grid-flow-col auto-cols-max gap-x-8 overflow-x-scroll'>
                <div className='w-5'></div>
                {data.map((item, idx) =>
                  <li key={idx}>
                    <div className='h-80 w-80 bg-slate-50 rounded-xl p-5 flex flex-col justify-between'>
                      <div className='text-2xl font-bold flex items-center justify-between'>
                        {item.companyName}
                        <span className="text-sm chips h-[40px] flex items-center justify-center text-slate-900 rounded-full w-max px-5 py-2 bg-slate-200">{item.type}</span>
                      </div>
                      <div className='text-base font-bold'>
                        {item.post}
                        <div className='text-sm font-bold text-slate-400'>{item.city},{item.country}</div>
                      </div>
                      <div className='font-bold text-slate-400 overflow-hidden'>{item.jobDescription} sldjfl lskjdlfj j lskjldfj</div>
                      <div className='flex justify-between items-center'>
                        {item.stipend.from} - {item.stipend.to} / {item.stipend.per}
                        <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">Apply Now</button>
                      </div>
                    </div>
                  </li>
                )}
                <div className='w-5'></div>
              </ul>
            </div>
            <div>
              <h1 className='text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900 mt-3 mb-3 mx-8'>System Admin</h1>
              <ul className='grid grid-flow-col auto-cols-max gap-x-8 overflow-x-scroll'>
                <div className='w-5'></div>
                {data.map((item, idx) =>
                  <li key={idx}>
                    <div className='h-80 w-80 bg-slate-50 rounded-xl p-5 flex flex-col justify-between'>
                      <div className='text-2xl font-bold flex items-center justify-between'>
                        {item.companyName}
                        <span className="text-sm chips h-[40px] flex items-center justify-center text-slate-900 rounded-full w-max px-5 py-2 bg-slate-200">{item.type}</span>
                      </div>
                      <div className='text-base font-bold'>
                        {item.post}
                        <div className='text-sm font-bold text-slate-400'>{item.city},{item.country}</div>
                      </div>
                      <div className='font-bold text-slate-400 overflow-hidden'>{item.jobDescription} sldjfl lskjdlfj j lskjldfj</div>
                      <div className='flex justify-between items-center'>
                        {item.stipend.from} - {item.stipend.to} / {item.stipend.per}
                        <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">Apply Now</button>
                      </div>
                    </div>
                  </li>
                )}
                <div className='w-5'></div>
              </ul>
            </div>
            <div>
              <h1 className='text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900 mt-3 mb-3 mx-8'>Back-End Engineer</h1>
              <ul className='grid grid-flow-col auto-cols-max gap-x-8 overflow-x-scroll'>
                <div className='w-5'></div>
                {data.map((item, idx) =>
                  <li key={idx}>
                    <div className='h-80 w-80 bg-slate-50 rounded-xl p-5 flex flex-col justify-between'>
                      <div className='text-2xl font-bold flex items-center justify-between'>
                        {item.companyName}
                        <span className="text-sm chips h-[40px] flex items-center justify-center text-slate-900 rounded-full w-max px-5 py-2 bg-slate-200">{item.type}</span>
                      </div>
                      <div className='text-base font-bold'>
                        {item.post}
                        <div className='text-sm font-bold text-slate-400'>{item.city},{item.country}</div>
                      </div>
                      <div className='font-bold text-slate-400 overflow-hidden'>{item.jobDescription} sldjfl lskjdlfj j lskjldfj</div>
                      <div className='flex justify-between items-center'>
                        {item.stipend.from} - {item.stipend.to} / {item.stipend.per}
                        <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">Apply Now</button>
                      </div>
                    </div>
                  </li>
                )}
                <div className='w-5'></div>
              </ul>
            </div>
            <div>
              <h1 className='text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900 mt-3 mb-3 mx-8'>Marketing</h1>
              <ul className='grid grid-flow-col auto-cols-max gap-x-8 overflow-x-scroll'>
                <div className='w-5'></div>
                {data.map((item, idx) =>
                  <li key={idx}>
                    <div className='h-80 w-80 bg-slate-50 rounded-xl p-5 flex flex-col justify-between'>
                      <div className='text-2xl font-bold flex items-center justify-between'>
                        {item.companyName}
                        <span className="text-sm chips h-[40px] flex items-center justify-center text-slate-900 rounded-full w-max px-5 py-2 bg-slate-200">{item.type}</span>
                      </div>
                      <div className='text-base font-bold'>
                        {item.post}
                        <div className='text-sm font-bold text-slate-400'>{item.city},{item.country}</div>
                      </div>
                      <div className='font-bold text-slate-400 overflow-hidden'>{item.jobDescription} sldjfl lskjdlfj j lskjldfj</div>
                      <div className='flex justify-between items-center'>
                        {item.stipend.from} - {item.stipend.to} / {item.stipend.per}
                        <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">Apply Now</button>
                      </div>
                    </div>
                  </li>
                )}
                <div className='w-5'></div>
              </ul>
            </div>
            <div>
              <h1 className='text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900 mt-3 mb-3 mx-8'>UI Designer</h1>
              <ul className='grid grid-flow-col auto-cols-max gap-x-8 overflow-x-scroll'>
                <div className='w-5'></div>
                {data.map((item, idx) =>
                  <li key={idx}>
                    <div className='h-80 w-80 bg-slate-50 rounded-xl p-5 flex flex-col justify-between'>
                      <div className='text-2xl font-bold flex items-center justify-between'>
                        {item.companyName}
                        <span className="text-sm chips h-[40px] flex items-center justify-center text-slate-900 rounded-full w-max px-5 py-2 bg-slate-200">{item.type}</span>
                      </div>
                      <div className='text-base font-bold'>
                        {item.post}
                        <div className='text-sm font-bold text-slate-400'>{item.city},{item.country}</div>
                      </div>
                      <div className='font-bold text-slate-400 overflow-hidden'>{item.jobDescription} sldjfl lskjdlfj j lskjldfj</div>
                      <div className='flex justify-between items-center'>
                        {item.stipend.from} - {item.stipend.to} / {item.stipend.per}
                        <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">Apply Now</button>
                      </div>
                    </div>
                  </li>
                )}
                <div className='w-5'></div>
              </ul>
            </div>
            <div>
              <h1 className='text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900 mt-3 mb-3 mx-8'>UX Designer</h1>
              <ul className='grid grid-flow-col auto-cols-max gap-x-8 overflow-x-scroll'>
                <div className='w-5'></div>
                {data.map((item, idx) =>
                  <li key={idx}>
                    <div className='h-80 w-80 bg-slate-50 rounded-xl p-5 flex flex-col justify-between'>
                      <div className='text-2xl font-bold flex items-center justify-between'>
                        {item.companyName}
                        <span className="text-sm chips h-[40px] flex items-center justify-center text-slate-900 rounded-full w-max px-5 py-2 bg-slate-200">{item.type}</span>
                      </div>
                      <div className='text-base font-bold'>
                        {item.post}
                        <div className='text-sm font-bold text-slate-400'>{item.city},{item.country}</div>
                      </div>
                      <div className='font-bold text-slate-400 overflow-hidden'>{item.jobDescription} sldjfl lskjdlfj j lskjldfj</div>
                      <div className='flex justify-between items-center'>
                        {item.stipend.from} - {item.stipend.to} / {item.stipend.per}
                        <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">Apply Now</button>
                      </div>
                    </div>
                  </li>
                )}
                <div className='w-5'></div>
              </ul>
            </div>
            <div>
              <h1 className='text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900 mt-3 mb-3 mx-8'>Product Manager</h1>
              <ul className='grid grid-flow-col auto-cols-max gap-x-8 overflow-x-scroll'>
                <div className='w-5'></div>
                {data.map((item, idx) =>
                  <li key={idx}>
                    <div className='h-80 w-80 bg-slate-50 rounded-xl p-5 flex flex-col justify-between'>
                      <div className='text-2xl font-bold flex items-center justify-between'>
                        {item.companyName}
                        <span className="text-sm chips h-[40px] flex items-center justify-center text-slate-900 rounded-full w-max px-5 py-2 bg-slate-200">{item.type}</span>
                      </div>
                      <div className='text-base font-bold'>
                        {item.post}
                        <div className='text-sm font-bold text-slate-400'>{item.city},{item.country}</div>
                      </div>
                      <div className='font-bold text-slate-400 overflow-hidden'>{item.jobDescription} sldjfl lskjdlfj j lskjldfj</div>
                      <div className='flex justify-between items-center'>
                        {item.stipend.from} - {item.stipend.to} / {item.stipend.per}
                        <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">Apply Now</button>
                      </div>
                    </div>
                  </li>
                )}
                <div className='w-5'></div>
              </ul>
            </div>
            <div>
              <h1 className='text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900 mt-3 mb-3 mx-8'>DevOps Engineer</h1>
              <ul className='grid grid-flow-col auto-cols-max gap-x-8 overflow-x-scroll'>
                <div className='w-5'></div>
                {data.map((item, idx) =>
                  <li key={idx}>
                    <div className='h-80 w-80 bg-slate-50 rounded-xl p-5 flex flex-col justify-between'>
                      <div className='text-2xl font-bold flex items-center justify-between'>
                        {item.companyName}
                        <span className="text-sm chips h-[40px] flex items-center justify-center text-slate-900 rounded-full w-max px-5 py-2 bg-slate-200">{item.type}</span>
                      </div>
                      <div className='text-base font-bold'>
                        {item.post}
                        <div className='text-sm font-bold text-slate-400'>{item.city},{item.country}</div>
                      </div>
                      <div className='font-bold text-slate-400 overflow-hidden'>{item.jobDescription} sldjfl lskjdlfj j lskjldfj</div>
                      <div className='flex justify-between items-center'>
                        {item.stipend.from} - {item.stipend.to} / {item.stipend.per}
                        <button className="text-sm chips h-[40px] flex items-center justify-center text-white rounded-full w-max px-5 py-2 bg-slate-900">Apply Now</button>
                      </div>
                    </div>
                  </li>
                )}
                <div className='w-5'></div>
              </ul>
            </div>
            <div className='h-8'></div>
          </div>
        </div>
      </main>
    </div>
  )
}
