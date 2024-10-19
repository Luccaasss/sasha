import logoimg from "./../assets/logotofavico.png"
import menuBurgerPng from "./../assets/menu.png"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <div className="fixed bg-black w-full overflow-hidden border-opacity-10 border-b-[1px] border-white">

      <div className={`px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1900px] w-full`}>

          <nav className="w-full flex py-2 justify-between items-center navbar">
            <img src={logoimg} className="w-[55px]" />
            <div className="text-4xl text-[#00DED1] font-extrabold font-Sora">SASHA</div>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              <button type="button" className="text-white bg-[#00DED1] hover:bg-[#2bc2b8] focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">BUY SASHA</button>
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <Sheet>
                <SheetTrigger><img src={menuBurgerPng} className="w-[25px]" /></SheetTrigger>
                <SheetContent className="w-[300px] sm:w-[540px]">
                  <SheetHeader>
                    <SheetDescription>

                      <div className="flex flex-col items-center pt-10">
                        <button type="button" className="text-white bg-[#00DED1] hover:bg-[#2bc2b8] focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">BUY SASHA</button>
                      </div>

                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;