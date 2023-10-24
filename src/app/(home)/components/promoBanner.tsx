import Image from 'next/image'

const PromoBanner = ({src = "banner"}) => {
    return (
        <div className='p-5'>
            <Image 
            src={src}
            height={0}
            width={0}
            className='h-auto w-full'
            sizes='100w'
            alt='Até 55% de desconto esse mês!'
            />
        </div>
    )
}

export default PromoBanner