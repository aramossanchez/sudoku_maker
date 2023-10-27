export function ButtonComponent({text = '', onclick = () => {}, }) {

  return (
    <button
      className='rounded-xl px-8 py-[2px] text-lg text-normalFontColor font-bold ease-in-out duration-[0.25seg] bg-gradient-to-b from-primaryColor4 to-primaryColor4Darker shadow-buttonShadow active:scale-[99%] active:shadow-buttonShadowClick'
      onClick={() => { onclick() }}
    >
      {text}
    </button>
  )
}