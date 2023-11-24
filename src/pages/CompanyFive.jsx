import React from 'react'
import Catur from "../assets/img/csa.png"

function CompanyFive() {
    return (
        <div>
            <section className='flex md:bg-white md:w-full md:h-[500px] md:items-center md:justify-center sm:bg-white sm:w-full sm:h-[100px] sm:items-center sm:justify-center'>
                <img src={Catur} alt="" className='h-full object-cover' />
            </section>


            <section className='px-6 py-4'>
                <h1 className='text-3xl font-bold text-slate-700'>Sales Representative</h1>
                {/* <h1 className='text-2xl text-slate-600'>Lokasi : Wilayah Penempatan Tasik, Banjar dan Garut</h1>
                <p className='text-1xl text-slate-500'>Salary : Competitive, dependent on experience & Job Role</p> */}

                <p className='py-4 font-bold text-2xl text-slate-700'>Kriteria</p>
                <p> 1.	Laki/laki <br />
                    2.	Pendidikan Minimal D3 <br />
                    3.	Jujur Teliti dan siap bekerja dibawah tekanan
                </p>

                <p className='py-4 font-bold text-2xl text-slate-700'>Fasilitas</p>
                <p> 1.	Gaji Pokok UMR <br />
                    2.	Bonus <br />
                    3.	Uang Transport <br />
                    4.	Uang Sewa Motor <br />
                    5.	Uang Makan <br />
                    6.	Tunjangan BPJS
                </p>
                <a href='https://forms.gle/Gk2YgdJQ6QjqVPuSA' className='mt-3 flex'>
                    <span className='flex items-center justify-center w-40 h-10 bg-blue-600  shadow-md text-white font-bold'> Apply Now </span>
                    <span className='flex items-center justify-center w-10 h-10 bg-blue-700  shadow-md text-white font-bold'><i className="fa-solid fa-caret-right"></i></span>
                </a>
            </section>

            <div>
                <hr className='my-5 border-t-2' />
            </div>

            <section className='px-6 py-4'>
                <h1 className='text-3xl font-bold text-slate-700'>Warehouse/ staff gudang</h1>
                {/* <h1 className='text-2xl text-slate-600'>Lokasi : Wilayah Penempatan Tasik, Banjar dan Garut</h1>
                <p className='text-1xl text-slate-500'>Salary : Competitive, dependent on experience & Job Role</p> */}

                <p className='py-4 font-bold text-2xl text-slate-700'>Kriteria</p>
                <p>
                    1. Pria dan Wanita <br />
                    2. Pendidikan D3,S1 semua jurusan <br />
                    3. Komunikatif, berkepribadian menarik, jujur, rajin, dan berdedikasi tinggi <br />
                    4. Mampu & menguasai Ms. Office <br />
                    5. Lebih diutamakan berpengalaman & mengerti pergudangan & logistik <br />
                    6. Fresh graduate dipertimbangkan <br />
                </p>

                <p className='py-4 font-bold text-2xl text-slate-700'>Tugas / Tanggung Jawab</p>
                <p>
                    1. Melakukan Pekerjaan Bagian Gudang<br />
                    2. Bertanggung jawab terhadap penerimaan, penyimpanan & pengeluaran barang<br />
                    3. Memastikan barang yang disimpan di gudang terjaga dengan baik<br />
                    4. Memastikan barang yang disimpan di gudang terhitung dengan baik<br />
                    5. Menjaga dan memelihara kebersihan gudang<br />
                    6. Memastikan barang dikirim tepat pada waktunya<br />
                    7. Memastikan target kerja tercapai sesuai dengan waktu yang telah ditentukan<br />
                </p>
                <a href='https://forms.gle/Gk2YgdJQ6QjqVPuSA' className='mt-3 flex'>
                    <span className='flex items-center justify-center w-40 h-10 bg-blue-600  shadow-md text-white font-bold'> Apply Now </span>
                    <span className='flex items-center justify-center w-10 h-10 bg-blue-700  shadow-md text-white font-bold'><i className="fa-solid fa-caret-right"></i></span>
                </a>
            </section>
        </div>
    )
}

export default CompanyFive