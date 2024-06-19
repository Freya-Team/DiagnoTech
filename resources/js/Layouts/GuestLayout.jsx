import Button from "@/Components/Button";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-row sm:justify-center items-start pt-6 sm:pt-0 bg-gray-100 relative sm:gap-52">
            <img className='absolute bottom-0 left-0 -z-0' src="/images/bg-blurBl.svg" alt="" />
            <img className='absolute top-0 right-0' src="/images/bg-blurTr.svg" alt="" />
            <div className='flex flex-col gap-5 mt-[5rem]'>
                <div className='flex flex-row items-center gap-4'>
                    <img src="/icons/diagnotech.svg" alt="" />
                    <h3 className='text-5xl font-[1000] font-poppins'>Diagno<span className='text-[#2DD2C5]'>Tech</span></h3>
                </div>
                <p className='pr-20 font-semibold'>Kami membantu anda mendeteksi <br /> penyakit melalui gambar menggunakan teknologi Deep <br /> Learning.</p>
                <a href="" className="w-30 text-base cursor-pointer">
                    <Button text="Kembali ke Beranda" theme="primary" />
                </a>
            </div>

            <div className="w-full  sm:max-w-md mt-[5rem] px-6 py-4 bg-white/30  backdrop-blur-sm shadow-md overflow-hidden sm:rounded-lg">
                <h1 className="text-2xl font-extrabold  text-center ">Selamat Datang</h1>
                <p className="text-center ">Masuk untuk identifikasi penyakit anda</p>
                {children}
            </div>
        </div>
    );
}
