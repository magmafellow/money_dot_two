export default function Header() {
  return (
    <div className="flex justify-between px-3.5 pb-4">
      <div className="lg:scale-110">
        <img className="cursor-pointer" src="/logo.svg" alt="logotype svg" />
      </div>
      <button className="lg:hidden bg-gradient-to-b from-[#1890FF] to-[#145AFF] py-[8.5px] px-[25px] font-semibold text-[12px] text-white rounded-full">
        Оставить заявку
      </button>
    </div>
  )
}