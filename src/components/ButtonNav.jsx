import { useRouter } from "next/router";

const ButtonNav = () => {
    const router = useRouter();
    return ( 
        <>
            <div className="flex justify-left gap-4">
                <button 
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={() => router.push('/')}
                >
                    Home
                </button>
                <button 
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={() => router.push('/about')}
                >
                    About
                </button>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={() => router.push('/content')}
                >
                    Content
                </button>
            </div>
        </>
     );
}
 
export default ButtonNav;