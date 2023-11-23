import React from 'react'
import WooriBank from "../assets/img/logo-bank-woori.png"

function CompanyThree() {
    return (
        <div>
            <section className='bg-blue-500 w-full h-[500px]'>
                <img src={WooriBank} alt="" className='w-full h-full object-cover' />
            </section>

            <section className='px-6 py-4'>
                <h1 className='text-3xl font-bold text-slate-700'>Marketing Funding</h1>
                {/* <h1 className='text-2xl text-slate-600'>Lokasi : Wilayah Penempatan Tasik, Banjar dan Garut</h1>
                <p className='text-1xl text-slate-500'>Salary : Competitive, dependent on experience & Job Role</p> */}

                <p className='py-4 font-bold text-2xl text-slate-700'>Kriteria</p>
                <p>1. Pria/ Wanita <br />
                    2. Diutamakan S1 Semua Jurusan <br />
                    3. IPK berlaku minimal 3.00 <br />
                    4. Mampu mengoperasikan komputer <br />
                    5. Berpenampilan menarik <br />
                    6. Usia maksimal 30 tahun <br />
                    7. Menyukai tantangan dan berorientasi pada target <br />
                    8. Siap ditempatkan di BWS wilayah KC Tasikmalaya
                </p>
                <a href='https://forms.gle/viR5Zf87ChXdjNfY8' className='mt-3 flex'>
                    <span className='flex items-center justify-center w-40 h-10 bg-blue-600  shadow-md text-white font-bold'> Apply Now </span>
                    <span className='flex items-center justify-center w-10 h-10 bg-blue-700  shadow-md text-white font-bold'><i className="fa-solid fa-caret-right"></i></span>
                </a>
            </section>

            <div>
                <hr className='my-5 border-t-2' />
            </div>

            <section className='px-6 py-4'>
                <h1 className='text-3xl font-bold text-slate-700'>Staff Operasional/ Back Office</h1>

                <p className='py-4 font-bold text-2xl text-slate-700'>Kriteria</p>
                <p>1. Pria/ Wanita <br />
                    2. Diutamakan S1 Semua Jurusan <br />
                    3. IPK berlaku minimal 3.00 <br />
                    4. Mampu mengoperasikan komputer <br />
                    5. Berpenampilan menarik <br />
                    6. Usia maksimal 26 tahun <br />
                    7. Menyukai tantangan dan berorientasi pada target <br />
                    8. Siap ditempatkan di BWS wilayah KC Tasikmalaya
                </p>
                <a href='https://forms.gle/viR5Zf87ChXdjNfY8' className='mt-3 flex'>
                    <span className='flex items-center justify-center w-40 h-10 bg-blue-600  shadow-md text-white font-bold'> Apply Now </span>
                    <span className='flex items-center justify-center w-10 h-10 bg-blue-700  shadow-md text-white font-bold'><i className="fa-solid fa-caret-right"></i></span>
                </a>
            </section>

        </div>
    )
}

export default CompanyThree