export default function Transfer() {
  return (
    <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 lg:grid-rows-3">
      {/* bg-gradient-to-b from-[#ffffff00] from-70% via-[#D1E4FA] to-[#BBD5FB] */}
      {/* box#1 */}
      <div className="grad lg:order-1 lg:row-span-3 lg:flex lg:flex-col lg:justify-center lg:gap-12 to-100% rounded-2xl border-2 border-[#E5E5E5] py-7 px-6">
        <h1 className="leading-none mb-7 font-bold text-[#090909] text-[40px] lg:text-[70px] -tracking-[2px]">
          Быстрые
          <br />
          переводы
          <br />
          денег из и в РФ
        </h1>
        <div className="flex gap-2.5 items-center bg-white rounded-full p-2.5">
          <div className="w-6 lg:w-10 h-6 lg:h-10">
            <img
              className="h-full w-full object-center object-cover"
              src="/transfers/finance_stats.svg"
              alt="stats"
            />
          </div>
          <p className="text-[#252832] tracking-[.04em] text-[10px] lg:text-[16px] font-medium">
            Работаем с <span className="italic">физическими</span> и{' '}
            <span className="italic">юридическими</span> лицами
          </p>
        </div>
      </div>
      {/* box#2 */}
      <div className="grid lg:order-3 grid-cols-2 gap-3">
        <div className="bg-gradient-to-b lg:flex flex-col justify-between from-[#1890FF] to-[#145AFF] rounded-2xl py-3 px-3.5">
          <p className="text-white opacity-[.90] text-lg lg:text-[24px] font-semibold leading-none">
            Минимальная комиссия
          </p>
          <p className="text-white leading-none opacity-[.85] text-[60px] lg:text-[80px] font-semibold text-end -tracking-[0.1em]">
            3%
          </p>
        </div>
        <div className="relative bg-gradient-to-b from-[#FF6B00] to-[#FF9F0E] rounded-2xl py-3 px-3.5 overflow-hidden">
          <p className="text-lg lg:text-[24px] font-semibold text-black leading-none">
            Минимальная сумма перевода{' '}
            <span className="font-extrabold">
              2<span className="mr-[2px]">0</span>000$
            </span>
          </p>

          {/* decor %waiting% */}
          <div className="w-[130px] lg:w-[177px] h-[130px] lg:h-[177px] absolute -bottom-4 right-0 lg:-bottom-6 lg:right-10">
            <img
              className="w-full h-full object-center object-contain"
              src="/transfers/cash_wallet_02.png"
              alt="decor cash_wallet"
            />
          </div>
        </div>
      </div>
      {/* box#3 */}
      <div className="bg-[#0F162B] lg:order-2 lg:row-span-2 rounded-2xl py-8 px-6">
        <form action="#">
          <label
            className="block text-white lg:text-xl font-medium mb-4"
            htmlFor="person_name"
          >
            Как к вам обращаться?
          </label>
          <input
            placeholder="Введите ваше имя"
            className="w-full mb-4 bg-[rgba(255,255,255,0.03)] lg:text-lg outline-none py-4 px-6 placeholder:text-[#8695AC] text-[#a7b7d0] border border-[#E4E7EC] rounded-xl"
            id="person_name"
            name="person_name"
            type="text"
          />
          <label
            className="block text-white lg:text-xl font-medium mb-4"
            htmlFor="telegram"
          >
            Ваш телеграмм
          </label>
          <input
            className="w-full mb-6 lg:mb-8 bg-[rgba(255,255,255,0.03)] lg:text-lg outline-none py-4 px-6 placeholder:text-[#8695AC] text-[#a7b7d0] border border-[#E4E7EC] rounded-xl"
            placeholder="Введите ваш телеграмм"
            id="telegram"
            name="telegram"
            type="text"
          />
          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <div className="text-center flex-shrink-0">
              <button className="px-[80px] py-4 lg:py-5 bg-gradient-to-b text-white rounded-full from-[#1890FF] to-[#145AFF] font-semibold">
                Отправить заявку
              </button>
            </div>
            <div>
              <p className="text-white text-[12px] lg:text-base pl-6 pr-3 relative">
                Заполните форму и в кратчайшие сроки с вами свяжется наш
                менеджер!
                <span className="absolute top-0 left-1 text-lg">*</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
