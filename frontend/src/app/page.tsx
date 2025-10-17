import { AuroraBackground } from '@/components/ui/shadcn-io/aurora-background';

export default function Home() {
    return (
        <AuroraBackground className='bg-[#121212] text-white'>
            <div className='relative z-10 pt-32 pb-20 px-6'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h1 className='text-6xl font-bold mb-6 tracking-tight'>
                        Twoje wydarzenia,
                        <br />
                        <span className='text-gray-500'>
                            idealnie zorganizowane
                        </span>
                    </h1>
                    <p className='text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed'>
                        Eventure to aplikacja, która pomaga w organizacji i
                        zarządzaniu wydarzeniami. Od małych spotkań po duże
                        konferencje – wszystko w jednym miejscu.
                    </p>
                    <button className='bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all transform hover:scale-105 cursor-pointer '>
                        Rozpocznij teraz
                    </button>
                </div>
            </div>
        </AuroraBackground>
    );
}
