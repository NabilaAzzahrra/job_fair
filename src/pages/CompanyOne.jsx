import React from 'react'

function CompanyOne() {
    return (
        <div>
            <section className='bg-white w-full h-[200px]'>
                <div className="flex justify-center items-center h-full mt-4">
                    <img src='https://lokertasikmalaya.id/wp-content/uploads/2022/11/TASCO-Mini-Mart.jpeg' alt='Deskripsi gambar' className='object-cover m-6' />
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
                        <h1 className='text-3xl font-bold text-slate-700'>ACCOUNTING</h1>
                    </div>
                </div>
                <p className='py-4 text-2xl text-slate-700 font-bold'>Kriteria Kandidat :</p>
                <p className='px-1'>
                    <ul className='space-y-4 text-left text-gray-500 dark:text-gray-400'>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Jenis Kelamin Laki/laki - Perempuan</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Fresh graduate/ Pengalaman lebih diutamakan</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Usia maksimal 25 tahun</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Pendidikan D3/ S1 Semua jurusan</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Mampu bekerja secara individu atau team</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Mampu bekerja dibawah tekanan, disiplin, gesit, jujur dan tanggung jawab</span>
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
                        <h1 className='text-3xl font-bold text-slate-700'>MARKETING</h1>
                    </div>
                </div>
                <p className='py-4 text-2xl text-slate-700 font-bold'>Kriteria Kandidat :</p>
                <p className='px-1'>
                    <ul className='space-y-4 text-left text-gray-500 dark:text-gray-400'>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Jenis Kelamin Laki/laki - Perempuan</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Fresh graduate/ Pengalaman lebih diutamakan</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Usia maksimal 25 tahun</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Pendidikan D3/ S1 Semua jurusan</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Mampu bekerja secara individu atau team</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Mampu bekerja dibawah tekanan, disiplin, gesit, jujur dan tanggung jawab</span>
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
                        <h1 className='text-3xl font-bold text-slate-700'>WAKIL KEPALA TOKO</h1>
                    </div>
                </div>
                <p className='py-4 text-2xl text-slate-700 font-bold'>Kriteria Kandidat :</p>
                <p className='px-1'>
                    <ul className='space-y-4 text-left text-gray-500 dark:text-gray-400'>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Jenis Kelamin Laki/laki - Perempuan</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Fresh graduate/ Pengalaman lebih diutamakan</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Usia maksimal 25 tahun</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Pendidikan D3/ S1 Semua jurusan</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Mampu bekerja secara individu atau team</span>
                        </li>
                        <li className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Mampu bekerja dibawah tekanan, disiplin, gesit, jujur dan tanggung jawab</span>
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

export default CompanyOne