import React from 'react'
import HotelSantika from "../assets/img/2560px-Santika_Indonesia_Hotels_&_Resorts_logo.svg.png"

function CompanyTwo() {
    return (
        <div>
            <section className='bg-white w-full h-[200px]'>
                <div className="flex justify-center items-center h-full mt-4">
                    <img src= {HotelSantika} alt='Deskripsi gambar' className='object-cover m-6' width={500} />
                </div>
            </section>
            {/* <section className='bg-red-300 w-full h-[150px]'>
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-col">
                        <img src='src/assets/img/tsc.jpeg' alt='Deskripsi gambar' className='object-cover m-2' />
                    </div>
                    <div className="flex flex-col">
                        <img src='src/assets/img/tsc.jpeg' alt='Deskripsi gambar' className='object-cover m-2' />
                    </div>
                    <div className="flex flex-col">
                        <img src='src/assets/img/tsc.jpeg' alt='Deskripsi gambar' className='object-cover m-2' />
                    </div>
                </div>
            </section> */}

            <section className='px-6 py-4'>
                <div className='flex justify-between items-end'>
                    <div className='space-y-2'>
                        <h1 className='text-3xl font-bold text-slate-700'>FB Supervisor</h1>
                    </div>
                </div>
                <p className='py-4 text-2xl text-slate-700 font-bold'>Kriteria Kandidat :</p>
                <p className='px-1'>
                    <ul className='space-y-4 text-left text-gray-500 dark:text-gray-400'>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Jenis Kelamin Laki/lakin</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>terawat, antusias FB & kepribadian menyenangkan</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>keterampilan pengawasan yang kuat & ketajaman pekerjaan</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>disiplin dan pemain tim yang baik</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Berpengalaman di posisi yang sama min. 1 tahun</span>
                        </li>
                    </ul>
                </p>
                <a href='https://forms.gle/24Kb7swwaCDWVW5m7' className='mt-3 flex'>
                    <span className='flex items-center justify-center w-40 h-10 bg-blue-600  shadow-md text-white font-bold'> Apply Now </span>
                    <span className='flex items-center justify-center w-10 h-10 bg-blue-700  shadow-md text-white font-bold'><i className="fa-solid fa-caret-right"></i></span>
                </a>
            </section>

            <div>
                <hr className='my-5 border-t-2 m-6 border-cyan-700'></hr>
            </div>

            <section className='px-6 py-4'>
                <div className='flex justify-between items-end'>
                    <div className='space-y-2'>
                        <h1 className='text-3xl font-bold text-slate-700'>SALES EXECUTIVE</h1>
                    </div>
                </div>
                <p className='py-4 text-2xl text-slate-700 font-bold'>Kriteria Kandidat :</p>
                <p className='px-1'>
                    <ul className='space-y-4 text-left text-gray-500 dark:text-gray-400'>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Mampu mengemudi dan memiliki keahlian mengemudi yang sah</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Bersedia bekerja di bawah tekanan</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Mampu bekerja dalam tim</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Berorientasi pada target</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Minimal memiliki pengalaman 1 tahun di bidang yang sama</span>
                        </li>
                    </ul>
                </p>
                <a href='https://forms.gle/24Kb7swwaCDWVW5m7' className='mt-3 flex'>
                    <span className='flex items-center justify-center w-40 h-10 bg-blue-600  shadow-md text-white font-bold'> Apply Now </span>
                    <span className='flex items-center justify-center w-10 h-10 bg-blue-700  shadow-md text-white font-bold'><i className="fa-solid fa-caret-right"></i></span>
                </a>
            </section>
        </div>
    )
}

export default CompanyTwo